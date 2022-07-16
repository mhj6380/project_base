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
exports.TestData = void 0;
const typeorm_1 = require("typeorm");
let TestData = class TestData {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TestData.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TestData.prototype, "data1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TestData.prototype, "data2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TestData.prototype, "data3", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TestData.prototype, "data4", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TestData.prototype, "data5", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TestData.prototype, "data6", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TestData.prototype, "data7", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TestData.prototype, "data8", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TestData.prototype, "data9", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TestData.prototype, "data10", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TestData.prototype, "data11", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TestData.prototype, "data12", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TestData.prototype, "data13", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TestData.prototype, "data14", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TestData.prototype, "data15", void 0);
TestData = __decorate([
    typeorm_1.Entity("test")
], TestData);
exports.TestData = TestData;
//# sourceMappingURL=test.data.entity.js.map