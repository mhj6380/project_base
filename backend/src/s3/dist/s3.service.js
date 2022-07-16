"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.S3Service = void 0;
var common_1 = require("@nestjs/common");
var AWS = require("aws-sdk");
var crypto = require("crypto");
var sharp = require("sharp");
var S3Service = /** @class */ (function () {
    function S3Service(config // ConfigService 불러오기
    ) {
        this.config = config;
    }
    S3Service.prototype.test = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // sharp(
                //   'https://crevenew-media.s3.ap-northeast-2.amazonaws.com/partner/2629a915643896efa14914807eebcc6787d5e4c1.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaDmFwLW5vcnRoZWFzdC0yIkgwRgIhAMDsq5Y0yO72TXzxTJsohSqrNrmybgo2K%2BHOj9ZwCFxqAiEAlzsbtLEAZrH9i44pPL7LSAindICNjKEWe5ikzD6Sy1kq%2FwIItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3MzY4MTAyMDQ1NjMiDFv3k3wqbTUNHZbLJirTAqw1rd5%2FY3j3g4towifDiswaEZNRIJZrr6QSWY1YFF%2F%2BHKVPguerp4tulkdflv6UcTGWXlAZAZK%2F9CovRLBOqOeQHODz6hrceNq414HYKv%2BJsfNmMjY8DoQXIiF6sIZWEcx0GZWYo0bwv%2Fm9hD1TvPcI0ESNurz6dWqUDY1F8u5LKeR8AOzGTnHovfYGweI%2BOjrZo%2B9UI%2FGospJFh3TNtS%2FpdwDyyHQaLegmGimPKwHmvupjEcbFzDuBP8pIFhY3M5AErCntB23MDkJwIfo%2Fo%2B1Rz1WECF%2FPR2i2kIHqxRTZGyTi9qdPbN%2B3%2F%2F5u5MVXxOfcxToPjJF41Tip1NY2MFnE1PRlEwokUjlttZvx%2F11S3IXO1hSoo9tVVo8FtgSveWq2UFrCyyyCeLXvSZ20Qu0j8N09X5XevkRCPrxgkJrAeZAThQjBx%2F%2BXsYsk9MbdkjURzjCxwOWCBjqyAhdspYegqnEbOkj8EEWVPwvovSIOw2pVYA9c1c9QzGVqWSPMzl2nMQBx0o%2FVMvUOqPh6Bib5JHvBdz67diVjiEXXmcCdXu42xH8GssANI4ba8WDGhIRKHE6DToQz1Dhtb%2FmKCWsRhgBTBvT2p65G%2FLEoUAc4JQYJwmQq5gCjpcqTXPIkPenY7WEuRyN1u%2FqRNEZJiuxlLBzpRXeA2zKct23boYcP5utbZZ4cb6Gn6Ob2LysPadnPk7xaheoeheM%2Frrs2IYAGIp2woe2fEzFsIfNRd%2BuOCvafezC9YlUcgFy2%2B7akL4mWAPaz6awIKJ03p7lmRFyG1lyYdkk%2FPFXWvZxVCFgaNtMgUMlCNZiY%2BP350Jm0bNY%2FVNBRjtqxTblfdwlstk8tL6kTYTFR8wDrFC9rFQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210323T091750Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA2XDKPPWJQWXCH44B%2F20210323%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=b4df733eeef423d6558b6b1a0ae0e5427e43e835f2c4f9494a8a8ba4eacaeaa0',
                // )
                sharp("./dog-panting.jpeg")
                    .resize({ width: 500 })
                    .jpeg({ quality: 80 })
                    .toFile("./test", function (err, info) {
                    console.log(err, info);
                });
                console.log("SHARP 진행 --");
                return [2 /*return*/];
            });
        });
    };
    // S3 업로드  base64
    S3Service.prototype.upload = function (base64Image, thumbnail, extension) {
        return __awaiter(this, void 0, Promise, function () {
            var seed, uniqueSHA1String, ID, SECRET, BUCKET_NAME, DIRECTORY_NAME, s3, buf, fileExtention, fileName, payload, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        seed = crypto.randomBytes(20);
                        uniqueSHA1String = crypto
                            .createHash("sha1")
                            .update(seed)
                            .digest("hex");
                        ID = this.config.get("AWS_ACCESS_KEY");
                        SECRET = this.config.get("AWS_SECRETE_ACCESS_KEY");
                        BUCKET_NAME = this.config.get("AWS_BUCKET_NAME");
                        DIRECTORY_NAME = thumbnail ? "partner" : "none-partner";
                        s3 = new AWS.S3({ accessKeyId: ID, secretAccessKey: SECRET });
                        buf = Buffer.from(base64Image.toString().replace(/^data:image\/\w+;base64,/, ""), "base64");
                        fileExtention = extension
                            ? extension
                            : base64Image.split("/")[1].split(";")[0];
                        fileName = uniqueSHA1String + "." + fileExtention;
                        payload = {
                            Bucket: BUCKET_NAME,
                            Key: DIRECTORY_NAME + "/" + fileName,
                            Body: buf,
                            ContentEncoding: "base64",
                            ContentType: "image/" + fileExtention
                        };
                        return [4 /*yield*/, s3.upload(payload).promise()];
                    case 1:
                        result = _a.sent();
                        if (thumbnail) {
                            return [2 /*return*/, {
                                    fileName: result.Location,
                                    thumbnail: result.Location
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    fileName: result.Location
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 이미지 리사이즈
    S3Service.prototype.resize = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                sharp(body)
                    .resize({ width: 500 })
                    .jpeg({ quality: 80 })
                    .toFile("./test", function (err, info) {
                    console.log(err, info);
                });
                console.log("SHARP 진행 --");
                return [2 /*return*/, body];
            });
        });
    };
    S3Service = __decorate([
        common_1.Injectable()
    ], S3Service);
    return S3Service;
}());
exports.S3Service = S3Service;
