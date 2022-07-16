"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decrypt = exports.Encrypt = exports.randomStringUpper = exports.randomString = void 0;
const CryptoJS = require("crypto-js");
function randomString() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 15;
    var randomstring = "";
    for (var i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
}
exports.randomString = randomString;
function randomStringUpper() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    var string_length = 6;
    var randomstring = "";
    for (var i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
}
exports.randomStringUpper = randomStringUpper;
const Encrypt = (msg) => {
    return CryptoJS.AES.encrypt(msg, process.env.AESKey, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    }).toString();
};
exports.Encrypt = Encrypt;
const Decrypt = (base64string) => {
    return CryptoJS.AES.decrypt(base64string, process.env.AESKey).toString(CryptoJS.enc.Utf8);
};
exports.Decrypt = Decrypt;
//# sourceMappingURL=globalFuntion.js.map