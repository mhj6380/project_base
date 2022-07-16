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
exports.LanguageString2 = exports.LanguageString = void 0;
const typeorm_1 = require("typeorm");
let LanguageString = class LanguageString {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LanguageString.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], LanguageString.prototype, "language", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string3", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string4", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string5", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string6", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string7", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string8", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string9", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string10", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string11", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string12", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string13", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string14", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string15", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string16", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string17", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string18", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string19", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string20", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string21", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string22", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string23", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string24", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string25", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string26", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string27", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string28", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string29", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string30", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string31", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string32", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string33", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string34", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string35", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string36", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string37", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string38", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string39", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string40", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string41", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string42", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string43", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string44", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string45", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string46", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string47", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string48", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string49", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string50", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string51", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string52", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string53", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string54", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string55", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string56", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string57", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string58", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string59", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string60", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string61", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string62", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string63", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string64", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string65", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string66", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string67", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string68", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string69", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string70", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string71", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string72", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string73", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string74", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string75", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string76", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string77", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string78", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string79", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string80", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string81", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string82", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string83", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string84", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string85", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string86", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string87", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string88", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string89", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string90", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string91", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string92", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string93", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string94", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string95", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string96", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string97", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string98", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string99", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string100", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string101", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string102", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string103", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string104", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string105", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string106", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string107", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string108", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string109", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string110", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string111", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string112", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string113", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string114", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string115", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string116", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string117", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string118", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string119", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string120", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string121", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string122", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string123", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string124", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string125", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string126", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string127", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string128", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string129", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string130", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string131", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string132", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string133", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string134", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string135", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string136", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string137", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string138", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string139", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string140", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string141", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string142", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string143", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string144", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string145", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string146", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string147", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string148", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string149", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string150", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string151", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string152", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string153", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string154", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string155", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string156", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string157", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string158", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string159", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string160", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string161", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string162", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string163", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string164", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string165", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string166", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string167", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string168", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string169", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string170", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string171", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string172", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string173", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string174", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string175", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string176", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string177", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string178", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string179", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string180", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string181", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string182", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string183", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string184", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string185", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string186", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string187", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string188", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string189", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string190", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string191", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string192", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string193", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string194", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string195", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string196", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string197", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string198", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string199", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string200", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string201", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string202", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string203", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string204", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string205", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string206", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string207", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string208", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string209", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string210", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string211", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string212", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string213", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string214", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string215", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string216", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string217", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string218", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string219", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string220", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string221", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string222", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string223", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string224", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string225", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string226", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string227", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string228", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string229", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString.prototype, "string230", void 0);
LanguageString = __decorate([
    typeorm_1.Entity()
], LanguageString);
exports.LanguageString = LanguageString;
let LanguageString2 = class LanguageString2 {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LanguageString2.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], LanguageString2.prototype, "language", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string231", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string232", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string233", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string234", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string235", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string236", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string237", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string238", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string239", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string240", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string241", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string242", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string243", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string244", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string245", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string246", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string247", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string248", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string249", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string250", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string251", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string252", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string253", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string254", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string255", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string256", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string257", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string258", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string259", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string260", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string261", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string262", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string263", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string264", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string265", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string266", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string267", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string268", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string269", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string270", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string271", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string272", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string273", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string274", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string275", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string276", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string277", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string278", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string279", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string280", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string281", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string282", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string283", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string284", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string285", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string286", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string287", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string288", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string289", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string290", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string291", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string292", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string293", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string294", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string295", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string296", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string297", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string298", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string299", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string300", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string301", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string302", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string303", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string304", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string305", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string306", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string307", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string308", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string309", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string310", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string311", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string312", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string313", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string314", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string315", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string316", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string317", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string318", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string319", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string320", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string321", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string322", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string323", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string324", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string325", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string326", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string327", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string328", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string329", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string330", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string331", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string332", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string333", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string334", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string335", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string336", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string337", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string338", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string339", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string340", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string341", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string342", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string343", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string344", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string345", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string346", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string347", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string348", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string349", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string350", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string351", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string352", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string353", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string354", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string355", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string356", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string357", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string358", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string359", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string360", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string361", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string362", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string363", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string364", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string365", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string366", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string367", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string368", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string369", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string370", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string371", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string372", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string373", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string374", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string375", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string376", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string377", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string378", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string379", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string380", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string381", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string382", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string383", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string384", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string385", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string386", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string387", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string388", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string389", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string390", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LanguageString2.prototype, "string391", void 0);
LanguageString2 = __decorate([
    typeorm_1.Entity("language_string2")
], LanguageString2);
exports.LanguageString2 = LanguageString2;
//# sourceMappingURL=language-string.entity.js.map