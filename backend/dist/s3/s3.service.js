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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Service = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
const crypto = require("crypto");
const config_1 = require("@nestjs/config");
const sharp = require("sharp");
const fs = require("fs");
let S3Service = class S3Service {
    constructor(config) {
        this.config = config;
    }
    test() {
        return __awaiter(this, void 0, void 0, function* () {
            const sample = "https://crevenew-media-bucket.s3.ap-northeast-2.amazonaws.com/none-partner/423a56945c4dd61d59c9bc7b3164a71580cb6c0d.mpeg";
            fs.writeFile("./test.mp3", Buffer.from(sample, "binary"), () => {
                console.log("OG");
            });
        });
    }
    upload(base64Image, thumbnail, extension) {
        return __awaiter(this, void 0, void 0, function* () {
            const seed = crypto.randomBytes(20);
            const uniqueSHA1String = crypto
                .createHash("sha1")
                .update(seed)
                .digest("hex");
            const ID = this.config.get("AWS_ACCESS_KEY");
            const SECRET = this.config.get("AWS_SECRETE_ACCESS_KEY");
            const BUCKET_NAME = this.config.get("AWS_BUCKET_NAME");
            const DIRECTORY_NAME = thumbnail ? "partner" : "none-partner";
            const s3 = new AWS.S3({ accessKeyId: ID, secretAccessKey: SECRET });
            var buf = Buffer.from(base64Image.toString().replace(/^data:image\/\w+;base64,/, ""), "base64");
            const fileExtention = extension
                ? extension
                : base64Image.split("/")[1].split(";")[0];
            const fileName = `${uniqueSHA1String}.${fileExtention}`;
            var payload = {
                Bucket: BUCKET_NAME,
                Key: `${DIRECTORY_NAME}/${fileName}`,
                Body: buf,
                ContentEncoding: "base64",
                ContentType: `image/${fileExtention}`,
            };
            const result = yield s3.upload(payload).promise();
            if (thumbnail) {
                return {
                    fileName: result.Location,
                    thumbnail: result.Location,
                };
            }
            else {
                return {
                    fileName: result.Location,
                };
            }
        });
    }
    resize(body) {
        return __awaiter(this, void 0, void 0, function* () {
            sharp(body)
                .resize({ width: 500 })
                .jpeg({ quality: 80 })
                .toFile("./test", (err, info) => {
                console.log(err, info);
            });
            console.log("SHARP 진행 --");
            return body;
        });
    }
};
S3Service = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], S3Service);
exports.S3Service = S3Service;
//# sourceMappingURL=s3.service.js.map