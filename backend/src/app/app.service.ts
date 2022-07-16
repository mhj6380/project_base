import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { isJSON } from "class-validator";
import { Repository } from "typeorm";
import { Splash } from "./entities/splash.entity";
import { TestData } from "./entities/test.data.entity";
const Clayful = require("clayful");
// const Product = Clayful.Product;

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Splash)
    private readonly splashRepository: Repository<Splash>,
    @InjectRepository(TestData)
    private readonly testDataRepository: Repository<TestData>
  ) {}

  // @Cron("* * * * * *")
  // async cron() {
  //   console.log("TASK!");
  // }

  async devTool() {
    Clayful.config({
      client:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImE5YmE3NWRiNTlhMmFkOGFiN2EzYjBmYWUwMTNkNjk3YmM1NDBmYTYwZmZhYmQ2NjQxZDNkNTMxMGRhNmYzYjAiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjUwOTgzNDczLCJzdG9yZSI6IjJHUEY4M1EyUTU2VC5KVjJBUlU4UTdXQlQiLCJzdWIiOiJGNTY0ODVTVloyRDgifQ.I3AWeLr2dy4Q_y85HKSFyAS-N3_l3qbylxFZmK0k29w",
    });
    const Product = Clayful.Product;

    const payload = {};
    const options = {
      query: {
        page: 1,
      },
    };

    // Product.create(payload, options)
    //   .then((result) => {
    //     console.log(result);
    //     const headers = result.headers;
    //     const data = result.data;

    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     // Error case
    //     console.log(err);
    //   });
    Product.list(options)
      .then((result) => {
        const headers = result.headers;
        const data = result;

        console.log(data);
      })
      .catch((err) => {
        // Error case
        console.log(err);
      });
  }
  // App Splash Datas

  async policy() {
    const policyData = await this.splashRepository
      .createQueryBuilder("splash")
      .select(["splash.policy", "splash.terms"])
      .getOne();

    return policyData;
  }

  async testDataUpdate(body) {
    const {
      data1,
      data2,
      data3,
      data4,
      data5,
      data6,
      data7,
      data8,
      data9,
      data10,
      data11,
      data12,
      data13,
      data14,
      data15,
    } = body;

    const updateBody: any = {};

    if (data1)
      if (!isJson(data1)) {
        throw new BadRequestException("data1 = JSON String 형태만 가능합니다");
      } else {
        updateBody.data1 = data1;
      }
    if (data2)
      if (!isJson(data2)) {
        throw new BadRequestException("data2 = JSON String 형태만 가능합니다");
      } else {
        updateBody.data2 = data2;
      }
    if (data3)
      if (!isJson(data3)) {
        throw new BadRequestException("data3 = JSON String 형태만 가능합니다");
      } else {
        updateBody.data3 = data3;
      }
    if (data4)
      if (!isJson(data4)) {
        throw new BadRequestException("data4 = JSON String 형태만 가능합니다");
      } else {
        updateBody.data4 = data4;
      }
    if (data5)
      if (!isJson(data5)) {
        throw new BadRequestException("data5 = JSON String 형태만 가능합니다");
      } else {
        updateBody.data5 = data5;
      }
    if (data6)
      if (!isJson(data6)) {
        throw new BadRequestException("data6 = JSON String 형태만 가능합니다");
      } else {
        updateBody.data6 = data6;
      }
    if (data7)
      if (!isJson(data7)) {
        throw new BadRequestException("data7 = JSON String 형태만 가능합니다");
      } else {
        updateBody.data7 = data7;
      }
    if (data8)
      if (!isJson(data8)) {
        throw new BadRequestException("data8 = JSON String 형태만 가능합니다");
      } else {
        updateBody.data8 = data8;
      }
    if (data9)
      if (!isJson(data9)) {
        throw new BadRequestException("data9 = JSON String 형태만 가능합니다");
      } else {
        updateBody.data9 = data9;
      }
    if (data10)
      if (!isJson(data10)) {
        throw new BadRequestException("data10 = JSON String 형태만 가능합니다");
      } else {
        updateBody.data10 = data10;
      }
    if (data11)
      if (!isJson(data11)) {
        throw new BadRequestException("data11 = JSON String 형태만 가능합니다");
      } else {
        updateBody.data11 = data11;
      }
    if (data12)
      if (!isJson(data12)) {
        throw new BadRequestException("data12 = JSON String 형태만 가능합니다");
      } else {
        updateBody.data12 = data12;
      }
    if (data13)
      if (!isJson(data13)) {
        throw new BadRequestException("data13 = JSON String 형태만 가능합니다");
      } else {
        updateBody.data13 = data13;
      }
    if (data14)
      if (!isJson(data14)) {
        throw new BadRequestException("data14 = JSON String 형태만 가능합니다");
      } else {
        updateBody.data14 = data14;
      }
    if (data15)
      if (!isJson(data15)) {
        throw new BadRequestException("data15 = JSON String 형태만 가능합니다");
      } else {
        updateBody.data15 = data15;
      }

    await this.testDataRepository.update({}, updateBody);

    return { statusCode: 200, message: "업데이트 완료 " };
  }

  async getTestData(field: string) {
    const result = await this.testDataRepository.findOne();
    if (result[field]) {
      if (isJSON(result[field])) {
        return JSON.parse(result[field]);
      } else {
        return result[field];
      }
    } else {
      throw new BadRequestException(`존재하지 않는 필드 : ${field}`);
    }
  }
}

function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
}
