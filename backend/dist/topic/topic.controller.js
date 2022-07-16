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
exports.TopicController = void 0;
const common_1 = require("@nestjs/common");
const response_interface_1 = require("../interface/response.interface");
const topic_interface_1 = require("../interface/topic.interface");
const topic_dto_1 = require("./dto/topic.dto");
const topic_service_1 = require("./topic.service");
let TopicController = class TopicController {
    constructor(topicService) {
        this.topicService = topicService;
    }
    getList(type) {
        return this.topicService.getList(type);
    }
    createItem(body) {
        return this.topicService.createItem(body);
    }
    getOne(id) {
        return this.topicService.getOne(id);
    }
    updateItem(body) {
        return this.topicService.updateItem(body);
    }
    deleteItem(id) {
        return this.topicService.deleteItem(id);
    }
};
__decorate([
    common_1.Get("/list/:type"),
    __param(0, common_1.Param("type")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TopicController.prototype, "getList", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [topic_dto_1.CreateTopicDTO]),
    __metadata("design:returntype", Promise)
], TopicController.prototype, "createItem", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TopicController.prototype, "getOne", null);
__decorate([
    common_1.Put("/:id"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [topic_dto_1.UpdateTopicDTO]),
    __metadata("design:returntype", Promise)
], TopicController.prototype, "updateItem", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TopicController.prototype, "deleteItem", null);
TopicController = __decorate([
    common_1.Controller("topic"),
    __metadata("design:paramtypes", [topic_service_1.TopicService])
], TopicController);
exports.TopicController = TopicController;
//# sourceMappingURL=topic.controller.js.map