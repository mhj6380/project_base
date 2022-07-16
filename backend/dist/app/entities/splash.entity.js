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
exports.Intro = exports.BottomNav = exports.Splash = void 0;
const typeorm_1 = require("typeorm");
let Splash = class Splash {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Splash.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "appCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "splashImage", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "logoImage", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "facebookLoginIcon", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "googleLoginIcon", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "inappIcon", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "recIcon", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "recProgressImage", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "premiumUpgradeBannerImage", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "premiumUpgradeBannerImageEn", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "premiumUpgradeButton1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "premiumUpgradeButton2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "premiumUpgradeButtonEn1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "premiumUpgradeButtonEn2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "recBackgroundImage", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "mypageTabIcon1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "mypageTabIcon2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "mypageTabIcon3", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "mypageTabIcon4", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "giftIconImage", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "defaultBackgroundImage", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Splash.prototype, "normalUserSoundMixSaveCount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Splash.prototype, "normalUserSoundMixDailyPublicCount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Splash.prototype, "premiumUserSoundMixSaveCount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Splash.prototype, "premiumUserSoundMixDailyPublicCount", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "soundSelectedBackgroundImage", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "onesignalAppId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "onesignalRestApiKey", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "interstitialAdUnitId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "openAdUnitId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Splash.prototype, "rewardAdUnitId", void 0);
__decorate([
    typeorm_1.Column({ select: false }),
    __metadata("design:type", String)
], Splash.prototype, "policy", void 0);
__decorate([
    typeorm_1.Column({ select: false }),
    __metadata("design:type", String)
], Splash.prototype, "terms", void 0);
Splash = __decorate([
    typeorm_1.Entity()
], Splash);
exports.Splash = Splash;
let BottomNav = class BottomNav {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], BottomNav.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], BottomNav.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], BottomNav.prototype, "iconImage", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], BottomNav.prototype, "pageBackgroundImage", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], BottomNav.prototype, "targetPath", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], BottomNav.prototype, "sortIndex", void 0);
BottomNav = __decorate([
    typeorm_1.Entity("bottomNav")
], BottomNav);
exports.BottomNav = BottomNav;
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