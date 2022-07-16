import { Module } from "@nestjs/common";
import { PushMessageService } from "./push-message.service";
import { PushMessageController } from "./push-message.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PushMessage } from "./entities/notification.entity";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { OneSignalModule } from "onesignal-api-client-nest";

@Module({
  imports: [
    TypeOrmModule.forFeature([PushMessage]),
    OneSignalModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          appId: configService.get("ONESIGNAL_APP_ID"),
          restApiKey: configService.get("ONESIGNAL_REST_API_KEY"),
        };
      },
    }),
    ConfigModule,
  ],
  providers: [PushMessageService],
  controllers: [PushMessageController],
})
export class PushMessageModule {}
