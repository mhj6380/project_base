import { BadRequestException, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { PushMessage } from "./entities/notification.entity";
import {
  NotificationBySegmentBuilder,
  NotificationByFilterBuilder,
} from "onesignal-api-client-core";
import { InjectRepository } from "@nestjs/typeorm";
import { OneSignalService } from "onesignal-api-client-nest";
import dayjs = require("dayjs");
import { SendPushMessageDTO } from "./dto/push-message.dto";
import axios from "axios";

@Injectable()
export class PushMessageService {
  constructor(
    @InjectRepository(PushMessage)
    private readonly pushMessageRepository: Repository<PushMessage>,
    private readonly oneSignalService: OneSignalService
  ) {}

  async sendMessage(body: SendPushMessageDTO) {
    try {
      const onesignal = new PushMessage();
      onesignal.title = body.title;
      onesignal.content = body.content;
      onesignal.targetPath = body.targetPath;
      onesignal.targetOption = body.targetOption;

      // 메세지 히스토리를 DB에 기록
      this.pushMessageRepository.save(onesignal);

      let input;

      let notiBuilder;

      if (body.isPersonal) {
        // 개인전송
        notiBuilder = new NotificationByFilterBuilder().setFilters([
          {
            field: "tag",
            key: "userId",
            relation: "=",
            value: body.userId,
          },
          {
            field: "tag",
            key: body.type,
            relation: "=",
            value: true,
          },
        ]);
      } else {
        // 전체발송
        notiBuilder = new NotificationBySegmentBuilder().setIncludedSegments([
          "Active Users",
          "Inactive Users",
        ]);
      }

      if (body.sendAfter) {
        if (
          Number(dayjs(body.sendAfter).format("YYYYMMDDHHmmss")) <
          Number(dayjs().format("YYYYMMDDHHmmss"))
        ) {
          throw new BadRequestException(
            "예약시간은 현재시간보다 과거일 수 없습니다."
          );
        }
        //에약전송인 경우

        const send_after = dayjs(body.sendAfter).format();

        input = notiBuilder
          // .setFilters()
          .notification()
          .setHeadings({ en: body.title })
          .setSubtitle({ en: body.title })
          .setContents({ en: body.content })
          .setAppearance({
            small_icon: "mipmap/launcher_icon",
          })
          .setAttachments({
            data: {
              targetPath: body.targetPath,
              targetOption: body.targetOption,
            },
          })
          .setDelivery({ send_after })
          .build();
      } else {
        console.log("노티 왜안되지?");
        input = notiBuilder
          .notification()
          .setHeadings({ en: body.title })
          .setSubtitle({ en: body.title })
          .setContents({ en: body.content })
          .setAppearance({
            small_icon: "mipmap/launcher_icon",
          })
          .setAttachments({
            data: {
              targetPath: body.targetPath,
              targetOption: body.targetOption,
            },
          })
          .build();
      }

      // Onesignal에 메세지 전송 요청
      this.oneSignalService.createNotification(input);
      // !클론 앱 동기화

      // if (!body.isPersonal && process.env.APP_CODE === "asmr") {
      //   axios.post(
      //     "http://49.247.195.151:8080/api/v1/push-message/message",
      //     body
      //   );
      //   axios.post(
      //     "http://49.247.195.151:8081/api/v1/push-message/message",
      //     body
      //   );
      // }

      return {
        statusCode: 200,
        message: "PUSH 메세지 전송 완료!",
      };
    } catch (e) {
      console.log(e);
    }
  }
}
