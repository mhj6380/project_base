"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Notice = void 0;
var typeorm_1 = require("typeorm");
var Notice = /** @class */ (function () {
    function Notice() {
    }
    Notice.prototype.setCreateDate = function () {
        this.createdAt = new Date();
    };
    __decorate([
        typeorm_1.BeforeInsert()
    ], Notice.prototype, "setCreateDate");
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Notice.prototype, "id");
    __decorate([
        typeorm_1.Column({ length: 255 })
    ], Notice.prototype, "title");
    __decorate([
        typeorm_1.Column({ length: 255 })
    ], Notice.prototype, "titleEn");
    __decorate([
        typeorm_1.Column()
    ], Notice.prototype, "content");
    __decorate([
        typeorm_1.Column()
    ], Notice.prototype, "contentEn");
    __decorate([
        typeorm_1.Column()
    ], Notice.prototype, "viewCount");
    __decorate([
        typeorm_1.Column()
    ], Notice.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn()
    ], Notice.prototype, "updatedAt");
    Notice = __decorate([
        typeorm_1.Entity()
    ], Notice);
    return Notice;
}());
exports.Notice = Notice;
