"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateBoardDTO = exports.CreateBoardDTO = void 0;
var class_validator_1 = require("class-validator");
var mapped_types_1 = require("@nestjs/mapped-types");
var CreateBoardDTO = /** @class */ (function () {
    function CreateBoardDTO() {
    }
    __decorate([
        class_validator_1.IsString()
    ], CreateBoardDTO.prototype, "title");
    __decorate([
        class_validator_1.IsString()
    ], CreateBoardDTO.prototype, "defaultTemplateKey");
    __decorate([
        class_validator_1.IsString()
    ], CreateBoardDTO.prototype, "defaultWrapperKey");
    __decorate([
        class_validator_1.IsString()
    ], CreateBoardDTO.prototype, "morePageWrapperKey");
    __decorate([
        class_validator_1.IsString()
    ], CreateBoardDTO.prototype, "commentTemplateKey");
    __decorate([
        class_validator_1.IsString()
    ], CreateBoardDTO.prototype, "commentWrapperKey");
    __decorate([
        class_validator_1.IsString()
    ], CreateBoardDTO.prototype, "boardType");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateBoardDTO.prototype, "topic");
    __decorate([
        class_validator_1.IsInt()
    ], CreateBoardDTO.prototype, "permLvWrite");
    __decorate([
        class_validator_1.IsInt()
    ], CreateBoardDTO.prototype, "permLvWriteComment");
    __decorate([
        class_validator_1.IsInt()
    ], CreateBoardDTO.prototype, "permLvViewContentList");
    __decorate([
        class_validator_1.IsInt()
    ], CreateBoardDTO.prototype, "permLvViewContent");
    __decorate([
        class_validator_1.IsInt()
    ], CreateBoardDTO.prototype, "permLvViewComment");
    return CreateBoardDTO;
}());
exports.CreateBoardDTO = CreateBoardDTO;
var UpdateBoardDTO = /** @class */ (function (_super) {
    __extends(UpdateBoardDTO, _super);
    function UpdateBoardDTO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        class_validator_1.IsString()
    ], UpdateBoardDTO.prototype, "boardKey");
    return UpdateBoardDTO;
}(mapped_types_1.PartialType(CreateBoardDTO)));
exports.UpdateBoardDTO = UpdateBoardDTO;
