"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Qna = void 0;
var typeorm_1 = require("typeorm");
var Qna = /** @class */ (function () {
    function Qna() {
    }
    Qna.prototype.setCreateDate = function () {
        this.createdAt = new Date();
    };
    __decorate([
        typeorm_1.BeforeInsert()
    ], Qna.prototype, "setCreateDate");
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Qna.prototype, "id");
    __decorate([
        typeorm_1.Column({ length: 255 })
    ], Qna.prototype, "title");
    __decorate([
        typeorm_1.Column()
    ], Qna.prototype, "content");
    __decorate([
        typeorm_1.Column({ length: 255 })
    ], Qna.prototype, "titleEn");
    __decorate([
        typeorm_1.Column()
    ], Qna.prototype, "contentEn");
    __decorate([
        typeorm_1.Column()
    ], Qna.prototype, "topic");
    __decorate([
        typeorm_1.Column()
    ], Qna.prototype, "viewCount");
    __decorate([
        typeorm_1.Column()
    ], Qna.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn()
    ], Qna.prototype, "updatedAt");
    __decorate([
        typeorm_1.Column()
    ], Qna.prototype, "sortIndex");
    Qna = __decorate([
        typeorm_1.Entity()
    ], Qna);
    return Qna;
}());
exports.Qna = Qna;
