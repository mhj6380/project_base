import { Body, Controller, Post } from "@nestjs/common";
import { SendPushMessageDTO } from "./dto/push-message.dto";
import { PushMessageService } from "./push-message.service";

@Controller("push-message")
export class PushMessageController {
  constructor(private readonly pushMessageService: PushMessageService) {}

  // PUSH메세지 전송
  @Post("/message")
  sendMessage(@Body() body: SendPushMessageDTO): Promise<any> {
    return this.pushMessageService.sendMessage(body);
  }
}
