"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BottomNav = exports.Splash = void 0;
var typeorm_1 = require("typeorm");
var Splash = /** @class */ (function () {
    function Splash() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Splash.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "splashImage");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "logoImage");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "facebookLoginIcon");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "googleLoginIcon");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "inappIcon");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "recIcon");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "recProgressImage");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "premiumUpgradeBannerImage");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "recBackgroundImage");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "mypageTabIcon1");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "mypageTabIcon2");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "mypageTabIcon3");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "mypageTabIcon4");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "giftIconImage");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "defaultBackgroundImage");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "soundSelectedBackgroundImage");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "onesignalAppId");
    __decorate([
        typeorm_1.Column()
    ], Splash.prototype, "onesignalRestApiKey");
    __decorate([
        typeorm_1.Column({ select: false })
    ], Splash.prototype, "policy");
    __decorate([
        typeorm_1.Column({ select: false })
    ], Splash.prototype, "terms");
    Splash = __decorate([
        typeorm_1.Entity()
    ], Splash);
    return Splash;
}());
exports.Splash = Splash;
var BottomNav = /** @class */ (function () {
    function BottomNav() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], BottomNav.prototype, "id");
    __decorate([
        typeorm_1.Column({ length: 255 })
    ], BottomNav.prototype, "title");
    __decorate([
        typeorm_1.Column({ length: 255 })
    ], BottomNav.prototype, "iconImage");
    __decorate([
        typeorm_1.Column({ length: 255 })
    ], BottomNav.prototype, "pageBackgroundImage");
    __decorate([
        typeorm_1.Column({ length: 255 })
    ], BottomNav.prototype, "targetPath");
    __decorate([
        typeorm_1.Column()
    ], BottomNav.prototype, "sortIndex");
    BottomNav = __decorate([
        typeorm_1.Entity("bottomNav")
    ], BottomNav);
    return BottomNav;
}());
exports.BottomNav = BottomNav;
