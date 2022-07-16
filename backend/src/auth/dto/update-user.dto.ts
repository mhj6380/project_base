import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { CreateUserDTO } from "./create-user.dto";

export class UpdateUserDTO extends PartialType(CreateUserDTO) {}
