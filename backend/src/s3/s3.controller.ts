import { Body, Controller, Get, Post } from "@nestjs/common";
import { S3Service } from "./s3.service";

@Controller("s3")
export class S3Controller {
  constructor(private readonly s3Service: S3Service) {}

  @Post("/upload")
  upload(
    @Body("data") data,
    @Body("thumbnail") thumbnail: boolean,
    @Body("extension") extension: string
  ): Promise<any> {
    return this.s3Service.upload(data, thumbnail, extension);
  }

  @Post("/resize")
  resize(@Body("data") data): Promise<any> {
    return this.s3Service.resize(data);
  }

  @Get("/test")
  test() {
    return this.s3Service.test();
  }
}
