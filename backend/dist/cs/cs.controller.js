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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsController = void 0;
const common_1 = require("@nestjs/common");
const cs_service_1 = require("./cs.service");
let CsController = class CsController {
    constructor(crmService) {
        this.crmService = crmService;
    }
    test() {
        return this.crmService.test();
    }
    getOneNewCs(id) {
        return this.crmService.getOneNewCs(id);
    }
    createNewCs(body) {
        return this.crmService.createNewCs(body);
    }
    updateNewCs(body) {
        return this.crmService.updateNewCs(body);
    }
    deleteNewCs(id) {
        return this.crmService.deleteNewCs(id);
    }
    getNewCsList(page, limit) {
        return this.crmService.getNewCsList(page, limit);
    }
};
__decorate([
    common_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CsController.prototype, "test", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CsController.prototype, "getOneNewCs", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CsController.prototype, "createNewCs", null);
__decorate([
    common_1.Put("/:id"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CsController.prototype, "updateNewCs", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CsController.prototype, "deleteNewCs", null);
__decorate([
    common_1.Get("/:page/:limit"),
    __param(0, common_1.Param("page")), __param(1, common_1.Param("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CsController.prototype, "getNewCsList", null);
CsController = __decorate([
    common_1.Controller("cs"),
    __metadata("design:paramtypes", [cs_service_1.CsService])
], CsController);
exports.CsController = CsController;
//# sourceMappingURL=cs.controller.js.map