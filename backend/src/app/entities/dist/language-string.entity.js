"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LanguageString = void 0;
// import { randomString } from "src/globalFuntion";
var typeorm_1 = require("typeorm");
var LanguageString = /** @class */ (function () {
    function LanguageString() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], LanguageString.prototype, "id");
    __decorate([
        typeorm_1.Column({ length: 255 })
    ], LanguageString.prototype, "language");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string1");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string2");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string3");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string4");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string5");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string6");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string7");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string8");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string9");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string10");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string11");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string12");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string13");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string14");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string15");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string16");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string17");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string18");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string19");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string20");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string21");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string22");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string23");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string24");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string25");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string26");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string27");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string28");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string29");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string30");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string31");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string32");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string33");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string34");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string35");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string36");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string37");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string38");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string39");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string40");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string41");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string42");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string43");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string44");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string45");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string46");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string47");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string48");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string49");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string50");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string51");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string52");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string53");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string54");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string55");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string56");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string57");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string58");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string59");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string60");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string61");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string62");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string63");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string64");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string65");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string66");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string67");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string68");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string69");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string70");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string71");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string72");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string73");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string74");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string75");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string76");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string77");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string78");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string79");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string80");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string81");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string82");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string83");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string84");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string85");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string86");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string87");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string88");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string89");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string90");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string91");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string92");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string93");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string94");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string95");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string96");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string97");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string98");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string99");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string100");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string101");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string102");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string103");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string104");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string105");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string106");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string107");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string108");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string109");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string110");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string111");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string112");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string113");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string114");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string115");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string116");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string117");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string118");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string119");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string120");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string121");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string122");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string123");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string124");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string125");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string126");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string127");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string128");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string129");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string130");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string131");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string132");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string133");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string134");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string135");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string136");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string137");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string138");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string139");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string140");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string141");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string142");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string143");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string144");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string145");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string146");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string147");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string148");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string149");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string150");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string151");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string152");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string153");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string154");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string155");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string156");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string157");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string158");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string159");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string160");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string161");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string162");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string163");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string164");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string165");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string166");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string167");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string168");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string169");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string170");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string171");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string172");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string173");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string174");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string175");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string176");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string177");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string178");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string179");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string180");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string181");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string182");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string183");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string184");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string185");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string186");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string187");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string188");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string189");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string190");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string191");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string192");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string193");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string194");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string195");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string196");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string197");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string198");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string199");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string200");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string201");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string202");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string203");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string204");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string205");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string206");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string207");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string208");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string209");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string210");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string211");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string212");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string213");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string214");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string215");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string216");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string217");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string218");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string219");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string220");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string221");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string222");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string223");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string224");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string225");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string226");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string227");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string228");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string229");
    __decorate([
        typeorm_1.Column()
    ], LanguageString.prototype, "string230");
    LanguageString = __decorate([
        typeorm_1.Entity()
    ], LanguageString);
    return LanguageString;
}());
exports.LanguageString = LanguageString;
