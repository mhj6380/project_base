"use strict";
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
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const bodyParser = require("body-parser");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.use(bodyParser.json({ limit: "50mb" }));
        app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
        app.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }));
        app.enableCors();
        app.setGlobalPrefix("api/v1");
        const config = new swagger_1.DocumentBuilder()
            .setTitle("API DOCS EXAMPLE!")
            .setDescription("API 문서입니다.")
            .setVersion("0.0.1")
            .addBearerAuth({ type: "http", scheme: "bearer", bearerFormat: "Token" }, "access-token")
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup("api", app, document);
        yield app.listen(process.env.PORT);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map