import { Repository } from "typeorm";
import { PushMessage } from "./entities/notification.entity";
import { OneSignalService } from "onesignal-api-client-nest";
import { SendPushMessageDTO } from "./dto/push-message.dto";
export declare class PushMessageService {
    private readonly pushMessageRepository;
    private readonly oneSignalService;
    constructor(pushMessageRepository: Repository<PushMessage>, oneSignalService: OneSignalService);
    sendMessage(body: SendPushMessageDTO): Promise<{
        statusCode: number;
        message: string;
    }>;
}
