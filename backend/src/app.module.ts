import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { AppController } from "./app/app.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AppGateway } from "./app.gateway";
import { AppService } from "./app/app.service";
import { BottomNav, Intro, Splash } from "./app/entities/splash.entity";
import { S3Module } from "./s3/s3.module";
import { CsModule } from "./cs/cs.module";
import { NoticeModule } from "./notice/notice.module";
import { Qna } from "./app/entities/qna.entity";

import {
  LanguageString,
  LanguageString2,
} from "./app/entities/language-string.entity";
import { User } from "./auth/entities/auth.entity";
import { LikeUser } from "./app/entities/like.entity";
import { QnaModule } from "./qna/qna.module";

import { Premium } from "./app/entities/premium.entity";
import { APP_FILTER } from "@nestjs/core";
import { AllExceptionsFilter } from "./all-exception.filter";
import { OneSignalModule } from "onesignal-api-client-nest";
import { Scrab } from "./app/entities/scrab.entity";
import { PushMessageModule } from "./push-message/push-message.module";
import { PushMessage } from "./push-message/entities/notification.entity";
import { PushMessageService } from "./push-message/push-message.service";
// import { OnesignalService } from "./onesignal/onesignal.service";

import { FakeComment } from "./app/entities/fake.entity";
// import { ScheduleModule } from "@nestjs/schedule";
import { TestData } from "./app/entities/test.data.entity";
import { Topic } from "./topic/entities/topic.entity";
import { Board } from "./board/entities/board.entity";
import { TopicModule } from "./topic/topic.module";
import { BoardModule } from "./board/board.module";
import { FriendshipModule } from "./friendship/friendship.module";
import { ScheduleModule } from "./schedule/schedule.module";
// import Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: "mysql",
          host: configService.get("DB_HOST"),
          port: configService.get<number>("DB_PORT"),
          username: configService.get("DB_USERNAME"),
          password: configService.get("DB_PASSWORD"),
          database: configService.get("DB_DATABASE"),
          entities: [__dirname + "/**/*.entity{.ts,.js}"],
          keepConnectionAlive: true,
          charset: "utf8mb4_unicode_ci",
          timezone: "Asia/Seoul",
        };
        // synchronize: true,
      },
    }),
    AuthModule,
    TypeOrmModule.forFeature([
      Splash,
      Qna,
      BottomNav,
      LanguageString,
      LanguageString2,
      User,
      LikeUser,
      Premium,
      Scrab,
      PushMessage,
      Intro,
      FakeComment,
      TestData,
      Topic,
      Board,
    ]),
    S3Module,
    CsModule,
    NoticeModule,
    QnaModule,
    PushMessageModule,
    TopicModule,
    BoardModule,
    ScheduleModule,
    // OneSignalModule.forRoot({
    //   appId: "4c700a2a-7052-4790-9574-2b1cb46f4e6c",
    //   restApiKey: "MWM3NWM5MGMtY2UxYy00MWM2LTk2YTgtNWUzYWZhZWI0YzMx",
    // }),
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
    // ScheduleModule.forRoot(),
    FriendshipModule,
    // ScheduleModule,
  ],
  controllers: [AppController],
  providers: [
    AppGateway,
    AppService,
    PushMessageService,
    // {
    //   provide: APP_FILTER,
    //   useClass: AllExceptionsFilter,
    // },
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
