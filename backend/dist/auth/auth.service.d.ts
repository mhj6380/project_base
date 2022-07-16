import { Repository } from "typeorm";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { User } from "./entities/auth.entity";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { LoginUserDTO } from "./dto/login-user.dto";
import { Splash } from "src/app/entities/splash.entity";
export declare class AuthService {
    private readonly userRepository;
    private readonly splashRepository;
    private readonly jwtService;
    private readonly config;
    constructor(userRepository: Repository<User>, splashRepository: Repository<Splash>, jwtService: JwtService, config: ConfigService);
    getPersonalUser(uid: string): Promise<any>;
    existsByUserId(userId: string): Promise<any>;
    validateUser(userId: string, pass: string): Promise<any>;
    registerWeb(userData: CreateUserDTO): Promise<any>;
    registerApp(userData: CreateUserDTO): Promise<{
        statusCode: number;
        message: string;
        access_token?: undefined;
        refresh_token?: undefined;
    } | {
        statusCode: number;
        message: string;
        access_token: string;
        refresh_token: string;
    }>;
    deleteUid(uid: string): Promise<boolean>;
    login(user: LoginUserDTO): Promise<any | {
        status: number;
    }>;
    getAll(): Promise<User[]>;
    getOne(userId: string): Promise<any>;
    getAllUsers(page: number, limit: number): Promise<any>;
    getAdminList(page: number, limit: number, teamCode: string): Promise<any>;
    searchUser(search: string): Promise<any[]>;
    getSearchUserList(page: number, limit: number, searchText: string, startDate: string, endDate: string): Promise<any>;
    delete(userId: string): Promise<void>;
    update(updateData: UpdateUserDTO, uid: string): Promise<{
        statusCode: number;
        message: string;
        user_data?: undefined;
    } | {
        statusCode: number;
        user_data: any;
        message: string;
    }>;
}
