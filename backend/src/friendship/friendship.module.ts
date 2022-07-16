import { Module } from "@nestjs/common";
import { FriendshipService } from "./friendship.service";
import { FriendshipController } from "./friendship.controller";
import { Friendship, FriendshipRequest } from "./entities/friendship.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Guestbook, GuestbookComment } from "./entities/guestbook.entity";
import { Message } from "./entities/message.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FriendshipRequest,
      Friendship,
      Guestbook,
      GuestbookComment,
      Message,
    ]),
  ],
  providers: [FriendshipService],
  controllers: [FriendshipController],
})
export class FriendshipModule {}
