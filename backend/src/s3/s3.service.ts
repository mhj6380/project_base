import { Injectable } from "@nestjs/common";
import * as AWS from "aws-sdk";
import * as crypto from "crypto";
import { ConfigService } from "@nestjs/config";
import * as sharp from "sharp";
import * as fs from "fs";

@Injectable()
export class S3Service {
  constructor(
    private readonly config: ConfigService // ConfigService 불러오기
  ) {}

  async test() {
    const sample =
      "https://crevenew-media-bucket.s3.ap-northeast-2.amazonaws.com/none-partner/423a56945c4dd61d59c9bc7b3164a71580cb6c0d.mpeg";

    fs.writeFile("./test.mp3", Buffer.from(sample, "binary"), () => {
      console.log("OG");
    });
  }

  // S3 업로드  base64
  async upload(
    base64Image: string,
    thumbnail: boolean,
    extension?: string
  ): Promise<any> {
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

    var buf = Buffer.from(
      base64Image.toString().replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );

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
      // ACL: 'public-read',
    };

    // await s3.upload(payload);
    const result = await s3.upload(payload).promise();

    if (thumbnail) {
      return {
        fileName: result.Location,
        thumbnail: result.Location,
      };
    } else {
      return {
        fileName: result.Location,
      };
    }
  }

  // 이미지 리사이즈
  async resize(body: string) {
    sharp(body)
      .resize({ width: 500 })
      .jpeg({ quality: 80 })
      .toFile("./test", (err, info) => {
        console.log(err, info);
      });

    console.log("SHARP 진행 --");

    return body;
  }
}
