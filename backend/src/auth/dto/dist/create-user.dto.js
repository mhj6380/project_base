"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUserDTO = void 0;
var class_validator_1 = require("class-validator");
var CreateUserDTO = /** @class */ (function () {
    function CreateUserDTO() {
    }
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "userId");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "uid");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "udid");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "password");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "username");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "nickname");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "device");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "about");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "profile");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "gender");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "email");
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "level");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "phone");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "birthday");
    __decorate([
        class_validator_1.IsBoolean(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "agreeMarketing");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "zipCode");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "address");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "detailedAddress");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "sns");
    __decorate([
        class_validator_1.IsBoolean(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "push1");
    __decorate([
        class_validator_1.IsBoolean(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "push2");
    __decorate([
        class_validator_1.IsBoolean(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "push3");
    __decorate([
        class_validator_1.IsBoolean(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "push4");
    __decorate([
        class_validator_1.IsBoolean(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "push5");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "registerPath");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "country");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "lastAccessAt");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "language");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "inviteCode");
    __decorate([
        class_validator_1.IsBoolean(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "isBlock");
    __decorate([
        class_validator_1.IsBoolean(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "isAnonymous");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "deviceType");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "deviceLanguage");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "registedAt");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "temp1");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "temp2");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "temp3");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "temp4");
    __decorate([
        class_validator_1.IsBoolean(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "temp5");
    __decorate([
        class_validator_1.IsBoolean(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "temp6");
    __decorate([
        class_validator_1.IsInt(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "temp7");
    __decorate([
        class_validator_1.IsInt(),
        class_validator_1.IsOptional()
    ], CreateUserDTO.prototype, "temp8");
    return CreateUserDTO;
}());
exports.CreateUserDTO = CreateUserDTO;
