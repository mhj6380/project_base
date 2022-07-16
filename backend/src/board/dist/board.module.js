"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BoardModule = void 0;
var common_1 = require("@nestjs/common");
var board_service_1 = require("./board.service");
var board_controller_1 = require("./board.controller");
var config_1 = require("@nestjs/config");
var typeorm_1 = require("@nestjs/typeorm");
var board_entity_1 = require("./entities/board.entity");
var template_entity_1 = require("./entities/template.entity");
var widget_entity_1 = require("src/widget/entities/widget.entity");
var BoardModule = /** @class */ (function () {
    function BoardModule() {
    }
    BoardModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([
                    board_entity_1.Board,
                    board_entity_1.BoardContent,
                    board_entity_1.Comment,
                    board_entity_1.Like,
                    board_entity_1.Scrap,
                    template_entity_1.ContentTemplate,
                    widget_entity_1.PageWidget,
                ]),
                config_1.ConfigModule,
            ],
            providers: [board_service_1.BoardService],
            controllers: [board_controller_1.BoardController]
        })
    ], BoardModule);
    return BoardModule;
}());
exports.BoardModule = BoardModule;
