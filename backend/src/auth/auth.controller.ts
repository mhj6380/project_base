import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  UseGuards,
  Req,
  Put,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDTO } from "./dto/login-user.dto";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { User } from "./entities/auth.entity";
import { AuthGuard } from "@nestjs/passport";
// import { LocalAuthGuard } from './local-auth.guard';
import { Request } from "express";
import {
  ApiResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiCreatedResponse,
  ApiBody,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { RolesGuard } from "src/app/guard/roles.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly userService: AuthService) {}
  // @ApiBearerAuth()
  @Get("/temp")
  // @UseGuards(AuthGuard("jwt"))
  tempAuth() {
    return { auth: "works" };
  }

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get("/user")
  // @UseGuards(RolesGuard)
  getPersonalUser(@Req() req: Request): Promise<User[]> {
    const uid: any = req.headers.uid;
    return this.userService.getPersonalUser(uid);
  }

  @Get("/admin-list/:page/:limit/:teamCode")
  getAdminList(
    @Param("page") page: number,
    @Param("limit") limit: number,
    @Param("teamCode") teamCode: string
  ): Promise<User[]> {
    return this.userService.getAdminList(page, limit, teamCode);
  }

  //웹 전용 Register
  @Post("/register-web")
  @ApiCreatedResponse({
    description: "회원가입 성공",
  })
  // @ApiBody({ type: CreateUserDTO })
  registerWeb(@Body() userData: CreateUserDTO) {
    console.log(userData);
    return this.userService.registerWeb(userData);
  }

  //앱 전용 Register
  @Post("/register")
  @ApiCreatedResponse({
    description: "회원가입 성공",
  })
  @ApiBody({ type: CreateUserDTO })
  registerApp(@Body() userData: CreateUserDTO) {
    return this.userService.registerApp(userData);
  }

  //앱 전용 Register
  @Delete("/uid-delete/:uid")
  @ApiCreatedResponse({
    description: "회원가입 성공",
  })
  @ApiBody({ type: CreateUserDTO })
  deleteUid(@Param("uid") uid: string) {
    return this.userService.deleteUid(uid);
  }

  @Post("/login")
  @ApiOkResponse({
    description: "유저 로그인 성공",
  })
  @ApiBody({ type: LoginUserDTO })
  @ApiUnauthorizedResponse({ description: "인증 실패" })
  login(@Body() userData: LoginUserDTO): Promise<any> {
    return this.userService.login(userData);
  }

  @Get("/:userId")
  @UseGuards(AuthGuard("jwt"))
  getOneUser(@Param("userId") userId: string): any {
    return this.userService.getOne(userId);
  }

  @Delete("/:userId")
  delete(@Param("userId") userId: string) {
    return this.userService.delete(userId);
  }

  @Put("/")
  // @UseGuards(RolesGuard)
  patch(@Body() updateData: UpdateUserDTO, @Req() req: Request) {
    const uid: any = req.headers.uid;
    return this.userService.update(updateData, uid);
  }

  @Get("/users/:page/:limit")
  // @UseGuards(AuthGuard('jwt'))
  getAllUsers(@Param("page") page: number, @Param("limit") limit: number): any {
    return this.userService.getAllUsers(page, limit);
  }

  @Get("/user-search/:search")
  // @UseGuards(AuthGuard('jwt'))
  searchUser(@Param("search") search: string): any {
    return this.userService.searchUser(search);
  }

  @Get("/users/search/:searchText/:startDate/:endDate/:page/:limit")
  // @UseGuards(AuthGuard('jwt'))
  getSearchUserList(
    @Param("page") page: number,
    @Param("limit") limit: number,
    @Param("searchText") searchText: string,
    @Param("startDate") startDate: string,
    @Param("endDate") endDate: string
  ): any {
    return this.userService.getSearchUserList(
      page,
      limit,
      searchText,
      startDate,
      endDate
    );
  }
}
