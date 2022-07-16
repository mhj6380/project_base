import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ActionFriendshipDTO } from "./dto/action-friendship.dto";
import {
  CreateGuestbookCommentDTO,
  CreateGuestbookDTO,
  UpdateGuestbookCommentDTO,
  UpdateGuestbookDTO,
} from "./dto/guestbook.dto";
import {
  CreateMessageDTO,
  DeleteAllMessageDTO,
  DeleteMessageDTO,
  UpdateMessageDTO,
  ViewAllMessageDTO,
  ViewMessageDTO,
} from "./dto/message.dto";
import { RequestFriendshipDTO } from "./dto/request-friendship.dto";
import { FriendshipService } from "./friendship.service";

@Controller("friendship")
export class FriendshipController {
  constructor(private readonly friendshipService: FriendshipService) {}

  @Get("/validate/:myUserId/:otherUserId")
  validateFriendship(
    @Param("myUserId") myUserId: number,
    @Param("otherUserId") otherUserId: number
  ) {
    return this.friendshipService.validateFriendship(myUserId, otherUserId);
  }

  @Post("/request")
  requestFriendship(@Body() body: RequestFriendshipDTO) {
    return this.friendshipService.requestFriendship(body);
  }
  @Put("/action")
  actionFriendship(@Body() body: ActionFriendshipDTO) {
    return this.friendshipService.actionFriendship(body);
  }
  @Get("/friend-list/:userId")
  getFriendList(@Param("userId") userId: number) {
    return this.friendshipService.getFriendList(userId);
  }
  @Get("/send-request-list/:userId")
  getSendFriendRequestList(@Param("userId") userId: number) {
    return this.friendshipService.getSendFriendRequestList(userId);
  }
  @Get("/receive-request-list/:userId")
  getReceiveFriendRequestList(@Param("userId") userId: number) {
    return this.friendshipService.getReceiveFriendRequestList(userId);
  }

  // 방명록 프로세스
  @Get("/guestbook/:userId")
  getGuestbookList(@Param("userId") userId: number) {
    return this.friendshipService.getGuestbookList(userId);
  }
  @Post("/guestbook")
  createGuestbook(@Body() body: CreateGuestbookDTO) {
    return this.friendshipService.createGuestbook(body);
  }
  @Put("/guestbook")
  updateGuestbook(@Body() body: UpdateGuestbookDTO) {
    return this.friendshipService.updateGuestbook(body);
  }

  @Delete("/guestbook/:id")
  deleteGuestbook(@Param("id") id: number) {
    return this.friendshipService.deleteGuestbook(id);
  }

  @Get("/guestbook/comment/:guestbookId")
  getGuestbookCommentList(@Param("guestbookId") guestbookId: number) {
    return this.friendshipService.getGuestbookCommentList(guestbookId);
  }

  @Get("/guestbook/comment-child/:parentCommentId")
  getGuestbookCommentChildList(
    @Param("parentCommentId") parentCommentId: number
  ) {
    return this.friendshipService.getGuestbookCommentChildList(parentCommentId);
  }
  @Post("/guestbook/comment")
  createGuestbookComment(@Body() body: CreateGuestbookCommentDTO) {
    return this.friendshipService.createGuestbookComment(body);
  }
  @Put("/guestbook/comment")
  updateGuestbookComment(@Body() body: UpdateGuestbookCommentDTO) {
    return this.friendshipService.updateGuestbookComment(body);
  }

  @Delete("/guestbook/comment/:id")
  deleteGuestbookComment(@Param("id") id: number) {
    return this.friendshipService.deleteGuestbookComment(id);
  }

  // 쪽지 (message) 프로세스
  @Get("/message/:userId/:type")
  getMessageList(@Param("userId") userId: number, @Param("type") type: number) {
    return this.friendshipService.getMessageList(userId, type);
  }

  @Post("/message")
  createMessage(@Body() body: CreateMessageDTO) {
    return this.friendshipService.createMessage(body);
  }

  // 읽음처리 - 개별
  @Put("/message/view")
  viewMessage(@Body() body: ViewMessageDTO) {
    return this.friendshipService.viewMessage(body);
  }
  // 읽음처리 - 일괄
  @Put("/message/view-all")
  viewAllMessage(@Body() body: ViewAllMessageDTO) {
    return this.friendshipService.viewAllMessage(body);
  }
  // @Put("/message")
  // updateMessage(@Body() body: UpdateMessageDTO) {
  //   return this.friendshipService.updateMessage(body);
  // }
  // 삭제처리 - 개별
  @Delete("/message/delete")
  deleteMessage(@Body() body: DeleteMessageDTO) {
    return this.friendshipService.deleteMessage(body);
  }
  @Delete("/message/delete-all")
  deleteAllMessage(@Body() body: DeleteAllMessageDTO) {
    return this.friendshipService.deleteAllMessage(body);
  }
}
