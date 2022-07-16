import { SendPushMessageDTO } from "./dto/push-message.dto";
import { PushMessageService } from "./push-message.service";
export declare class PushMessageController {
    private readonly pushMessageService;
    constructor(pushMessageService: PushMessageService);
    sendMessage(body: SendPushMessageDTO): Promise<any>;
}
