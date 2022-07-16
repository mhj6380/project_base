import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { User } from "./entities/auth.entity";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { ConfigService } from "@nestjs/config";
import { LoginUserDTO } from "./dto/login-user.dto";
import { Encrypt } from "../globalFuntion";
import dayjs = require("dayjs");
import { Splash } from "src/app/entities/splash.entity";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Splash)
    private readonly splashRepository: Repository<Splash>,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService // ConfigService 불러오기
  ) {}

  async getPersonalUser(uid: string): Promise<any> {
    const result = await this.userRepository.findOne({ uid });

    if (!result)
      throw new NotFoundException(`유저 정보가 존재하지 않습니다. uid: ${uid}`);

    delete result.id;
    delete result.password;
    return result;
  }

  // 회원가입 Validation
  async existsByUserId(userId: string): Promise<any> {
    const user = await this.userRepository.findOne({ userId: userId || "" });

    if (user) {
      throw new ConflictException(
        "이미 존재하는 계정입니다. 다른 정보를 입력해 주세요."
      );
    }

    return null;
  }

  // 로그인 Validation
  async validateUser(userId: string, pass: string): Promise<any> {
    const user = await this.getOne(userId);

    if (!bcrypt.compareSync(pass, user.password)) {
      throw new UnauthorizedException(
        "이메일 또는 비밀번호를 다시 확인하세요. 이메일 또는 비밀번호를 잘못 입력하셨습니다."
      );
    }

    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  // 웹 전용 회원가입 V1 (일반, Firebase 연동안함)

  async registerWeb(userData: CreateUserDTO) {
    try {
      // await this.existsByUserId(userData.userId);
      const splash = await this.splashRepository.findOne();

      const user = new User();
      user.userId = userData.userId;
      user.password = userData.password;
      user.nickname = userData.nickname;
      user.username = userData.username;
      user.agreeMarketing = userData.agreeMarketing;
      user.email = userData.email;
      user.level = userData.level;
      // user.premiumExprierdAt = dayjs().add(splash.freeDays, "days").toDate();
      user.uid = userData.uid || userData.userId;
      user.phone = userData.phone ? Encrypt(userData.phone) : "";

      await this.userRepository.save(user);

      const accessToken = await this.jwtService.signAsync({
        userId: userData.userId,
      });
      // const refreshToken = await this.jwtService.signAsync({
      //   userId: userData.userId,
      // });

      return {
        statusCode: 200,
        expires_in: 3600,
        access_token: accessToken,
        refresh_token: "",
        user_data: userData,
        message: "회원가입 성공!",
      };
    } catch (e) {
      console.log(e.message);
      return e;
    }
  }

  // 웹 전용 회원가입 V2 (Firebase 연동)

  // 모바일 앱 전용 회원가입 (Firebase 연동)
  async registerApp(userData: CreateUserDTO) {
    const accessToken = await this.jwtService.signAsync({
      uid: userData.uid,
    });

    const refreshToken = await this.jwtService.signAsync({
      uid: userData.uid,
    });

    if (userData.isAnonymous) {
      // 비회원 가입인 경우
      const aleadyUidCheck = await this.userRepository.findOne({
        uid: userData.uid,
      });

      if (!userData.uid || userData.uid === "")
        throw new HttpException("uid는 필수입니다.", HttpStatus.FORBIDDEN);

      if (aleadyUidCheck)
        throw new HttpException(
          "중복된 uid가 존재합니다.",
          HttpStatus.FORBIDDEN
        );

      const user = new User();
      user.userId = userData.userId;
      user.registerPath = userData.registerPath;
      user.deviceLanguage = userData.deviceLanguage;
      user.device = userData.device;
      user.uid = userData.uid;
      user.udid = userData.udid;
      user.deviceType = userData.deviceType;

      // user.about = '';
      user.temp1 = userData.temp1;
      user.temp2 = userData.temp2;
      user.temp3 = userData.temp3;
      user.temp4 = userData.temp4;
      user.temp5 = userData.temp5;
      user.temp6 = userData.temp6;
      user.temp7 = userData.temp7;
      user.temp8 = userData.temp8;

      await this.userRepository.save(user);

      return {
        statusCode: 200,
        message: "비회원 가입 성공!",
      };
    } else {
      // 정회원으로 전환인경우

      if (!userData.userId)
        throw new HttpException(
          "userId 값은 필수입니다.",
          HttpStatus.FORBIDDEN
        );

      const aleadyUserCheck = await this.userRepository.findOne({
        userId: userData.userId,
      });

      if (aleadyUserCheck) {
        // 이미 존재하는 계정이면
        // 기존 임시 uid를 제거해주고,
        // this.userRepository.delete({ uid: userData.uid });

        await this.userRepository.update(
          {
            userId: userData.userId,
          },
          userData
        );
      } else {
        // 새로운 계정이면
        userData.registedAt = new Date();
        await this.userRepository.update(
          {
            uid: userData.uid,
          },
          userData
        );
      }

      return {
        statusCode: 200,
        message: "정회원으로 로그인 성공",
        access_token: accessToken,
        refresh_token: refreshToken,
      };
    }
    // const newUserData = await this.getOne(userData.userId);
  }

  public async deleteUid(uid: string) {
    console.log(uid);
    this.userRepository.delete({ uid });
    return true;
  }

  public async login(user: LoginUserDTO): Promise<any | { status: number }> {
    return this.validateUser(user.userId, user.password).then(
      async (userData) => {
        if (!userData) {
          throw new UnauthorizedException("존재하지 않습니다.");
        }

        const accessToken = await this.jwtService.signAsync({
          userId: userData.userId,
        });
        const refreshToken = await this.jwtService.signAsync({
          userId: userData.userId,
        });

        console.log(accessToken);
        return {
          expires_in: 3600,
          access_token: accessToken,
          refresh_token: refreshToken,
          userId: userData.userId,
          statusCode: 200,
          message: "로그인 성공!",
        };
      }
    );
  }

  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getOne(userId: string): Promise<any> {
    const user = await this.userRepository.findOne({ userId: userId || "" });
    if (!user)
      throw new NotFoundException(`"${userId}" ID가 존재하지 않습니다.`);

    const today = dayjs().format("YYYY-MM-DD");
    let isMembership = false;

    // 멤버십여부 조회
    const membership = await this.userRepository
      .createQueryBuilder()
      .where("userId=:userId AND premiumExprierdAt >= :today", {
        userId,
        today,
      })
      .getOne();
    if (membership) isMembership = true;

    return { ...user, isMembership };
  }

  async getAllUsers(page: number, limit: number): Promise<any> {
    const skippedItems = (page - 1) * limit;
    const totalCount = await this.userRepository.count();

    const users = await this.userRepository
      .createQueryBuilder()
      .orderBy("createdAt", "DESC")
      .offset(skippedItems)
      .limit(limit)
      .getMany();

    return {
      totalCount,
      page,
      limit,
      data: users,
    };
  }

  async getAdminList(
    page: number,
    limit: number,
    teamCode: string
  ): Promise<any> {
    console.log(teamCode);
    const skippedItems = (page - 1) * limit;
    const totalCount = await this.userRepository.count();

    const users = await this.userRepository
      .createQueryBuilder()
      .where("level >= :level", { level: 9 })
      .orderBy("createdAt", "DESC")
      .offset(skippedItems)
      .limit(limit)
      .getMany();

    return {
      totalCount,
      page,
      limit,
      data: users,
    };
  }

  async searchUser(search: string) {
    let users = [];
    if (search === "empty") {
      users = [];
    } else {
      users = await this.userRepository
        .createQueryBuilder("user")
        .select(["user.userId", "user.username"])
        .where(
          `user.userId LIKE "%${search}%" OR user.username LIKE "%${search}%"`,
          {
            userId: `%${search}%`,
          }
        )
        .getMany();
    }

    return users;
  }
  async getSearchUserList(
    page: number,
    limit: number,
    searchText: string,
    startDate: string,
    endDate: string
  ): Promise<any> {
    const skippedItems = (page - 1) * limit;
    const totalCount = await this.userRepository.count();

    let users;

    if (searchText === "empty") {
      users = await this.userRepository
        .createQueryBuilder()
        .andWhere("createdAt >= :startDate", { startDate })
        .andWhere("createdAt <= :endDate", { endDate: `${endDate} 23:59:59` })
        .orderBy("createdAt", "DESC")
        .offset(skippedItems)
        .limit(limit)
        .getMany();
    } else {
      users = await this.userRepository
        .createQueryBuilder()
        .where(
          "createdAt >= :startDate AND createdAt <= :endDate AND userId like :userId",
          {
            startDate,
            endDate: `${endDate} 23:59:59`,
            userId: `%${searchText}%`,
          }
        )
        .orWhere(
          "createdAt >= :startDate AND createdAt <= :endDate AND nickname like :nickname",
          {
            startDate,
            endDate: `${endDate} 23:59:59`,
            nickname: `%${searchText}%`,
          }
        )
        .orderBy("createdAt", "DESC")
        .offset(skippedItems)
        .limit(limit)
        .getMany();
    }

    return {
      totalCount,
      page,
      limit,
      data: users,
    };
  }

  async delete(userId: string) {
    await this.getOne(userId);
    await this.userRepository.delete({ userId });
  }

  async update(updateData: UpdateUserDTO, uid: string) {
    if (!uid) throw new BadRequestException("uid는 필수입니다.");

    if (updateData.nickname) {
      const validateNickname = await this.userRepository.findOne({
        nickname: updateData.nickname,
      });

      if (validateNickname && validateNickname.uid != uid) {
        return {
          statusCode: 400,
          message: "중복된 닉네임 입니다.",
        };
      }
    }
    await this.userRepository.update({ uid }, updateData);
    const userData = await this.getOne(updateData.userId);
    return {
      statusCode: 200,
      user_data: userData,
      message: "회원정보 수정 완료!",
    };
  }
}
