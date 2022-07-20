"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intro = exports.Splash = void 0;
const typeorm_1 = require("typeorm");
let Splash = class Splash {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Splash.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Splash.prototype, "introFirstRun", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Splash.prototype, "freeDays", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "videoProject", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "videoProjectStatement", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Splash.prototype, "splashTime", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "splashImageUrl", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Splash.prototype, "useIntroPage", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Splash.prototype, "appUpdateOptionAndroid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Splash.prototype, "appUpdateOptionIos", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "requiredMinVersionAndroid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "requiredMinVersionIos", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "companyName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "companyTel", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "companyCellNumber", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "serviceName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "csTel", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "csKakaoUrl", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Splash.prototype, "csKakaoUrlUsed", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "ownerName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "companyAddress", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "companyNumber", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "companyEmail", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "permissionService", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "permissionGain", void 0);
Splash = __decorate([
    typeorm_1.Entity()
], Splash);
exports.Splash = Splash;
let Intro = class Intro {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Intro.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], Intro.prototype, "source", void 0);
Intro = __decorate([
    typeorm_1.Entity("intro")
], Intro);
exports.Intro = Intro;
//# sourceMappingURL=splash.entity.js.map