import { AuthService } from "./auth.service";
import { LoginUserDTO } from "./dto/login-user.dto";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { User } from "./entities/auth.entity";
import { Request } from "express";
export declare class AuthController {
    private readonly userService;
    constructor(userService: AuthService);
    tempAuth(): {
        auth: string;
    };
    getAll(): Promise<User[]>;
    getPersonalUser(req: Request): Promise<User[]>;
    getAdminList(page: number, limit: number, teamCode: string): Promise<User[]>;
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
    login(userData: LoginUserDTO): Promise<any>;
    getOneUser(userId: string): any;
    delete(userId: string): Promise<void>;
    patch(updateData: UpdateUserDTO, req: Request): Promise<{
        statusCode: number;
        message: string;
        user_data?: undefined;
    } | {
        statusCode: number;
        user_data: any;
        message: string;
    }>;
    getAllUsers(page: number, limit: number): any;
    searchUser(search: string): any;
    getSearchUserList(page: number, limit: number, searchText: string, startDate: string, endDate: string): any;
}
