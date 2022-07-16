import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
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
  ViewAllMessageDTO,
  ViewMessageDTO,
} from "./dto/message.dto";
import { RequestFriendshipDTO } from "./dto/request-friendship.dto";
import { Friendship, FriendshipRequest } from "./entities/friendship.entity";
import { Guestbook, GuestbookComment } from "./entities/guestbook.entity";
import { Message } from "./entities/message.entity";

@Injectable()
export class FriendshipService {
  constructor(
    @InjectRepository(FriendshipRequest)
    private readonly friendshipRequestRepository: Repository<FriendshipRequest>,
    @InjectRepository(Friendship)
    private readonly friendshipRepository: Repository<Friendship>,
    @InjectRepository(Guestbook)
    private readonly guestbookRepository: Repository<Guestbook>,
    @InjectRepository(GuestbookComment)
    private readonly guestbookCommentRepository: Repository<GuestbookComment>,
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>
  ) {}

  async validateFriendship(myUserId: number, otherUserId: number) {
    const valid = await this.friendshipRepository.findOne({
      userId: myUserId,
      firendUserId: otherUserId,
    });
    return valid ? true : false;
  }
  async requestFriendship(body: RequestFriendshipDTO) {
    const current = await this.friendshipRequestRepository.findOne({
      fromUser: body.fromUser,
      toUser: body.toUser,
    });
    if (current) throw new BadRequestException("이미 신청한 상대입니다.");

    const friendshipRequest = new FriendshipRequest();
    friendshipRequest.fromUser = body.fromUser;
    friendshipRequest.toUser = body.toUser;
    friendshipRequest.status = 0;
    await this.friendshipRequestRepository.save(friendshipRequest);

    return {
      statusCode: 200,
      message: "친구 신청이 완료되었습니다.",
    };
  }

  async getFriendList(userId: number) {
    const result = await this.friendshipRepository
      .createQueryBuilder("friendship")
      .leftJoinAndSelect("friendship.friendInfo", "friendInfo")
      .where("friendship.userId = :userId", { userId })
      .select([
        "friendship.id",
        "friendship.createdAt",
        "friendInfo.id",
        "friendInfo.profile",
        "friendInfo.nickname",
        "friendInfo.username",
        "friendInfo.level",
      ])
      .getMany();
    return result;
  }

  async getSendFriendRequestList(userId: number) {
    const result = await this.friendshipRequestRepository
      .createQueryBuilder("request")
      .leftJoinAndSelect("request.toUserInfo", "toUserInfo")
      .where("request.fromUser = :userId AND status = 0", { userId })
      .select([
        "request.id",
        "request.status",
        "request.createdAt",
        "toUserInfo.id",
        "toUserInfo.profile",
        "toUserInfo.nickname",
        "toUserInfo.username",
        "toUserInfo.level",
      ])
      .getMany();
    return result;
  }

  async getReceiveFriendRequestList(userId: number) {
    const result = await this.friendshipRequestRepository
      .createQueryBuilder("request")
      .leftJoinAndSelect("request.fromUserInfo", "fromUserInfo")
      .where("request.toUser = :userId  AND status = 0", { userId })
      .select([
        "request.id",
        "request.status",
        "request.createdAt",
        "fromUserInfo.id",
        "fromUserInfo.profile",
        "fromUserInfo.nickname",
        "fromUserInfo.username",
        "fromUserInfo.level",
      ])
      .getMany();
    return result;
  }
  async actionFriendship(body: ActionFriendshipDTO) {
    const current = await this.friendshipRequestRepository.findOne({
      id: body.requestId,
    });

    const currentStatus = current.status;

    await this.friendshipRequestRepository.update(
      { id: body.requestId },
      {
        status: body.status,
      }
    );

    switch (body.status) {
      case 0: // 미승인
        if (currentStatus === 1) {
          this.friendshipRepository.delete({
            userId: current.fromUser,
            firendUserId: current.toUser,
          });
          this.friendshipRepository.delete({
            userId: current.toUser,
            firendUserId: current.fromUser,
          });
        }
        break;
      case 1: // 승인
        if (currentStatus !== 1) {
          const friendship = new Friendship();
          friendship.userId = current.fromUser;
          friendship.firendUserId = current.toUser;
          await this.friendshipRepository.save(friendship);

          const friendship2 = new Friendship();
          friendship2.userId = current.toUser;
          friendship2.firendUserId = current.fromUser;
          await this.friendshipRepository.save(friendship2);
        }
        break;
      case 2: // 반려
        if (currentStatus === 1) {
          this.friendshipRepository.delete({
            userId: current.fromUser,
            firendUserId: current.toUser,
          });
          this.friendshipRepository.delete({
            userId: current.toUser,
            firendUserId: current.fromUser,
          });
        }
        break;
    }

    return {
      statusCode: 200,
      message: "처리 완료",
    };
  }

  async getGuestbookList(userId: number) {
    const result = await this.guestbookRepository
      .createQueryBuilder("guestbook")
      .leftJoinAndSelect("guestbook.fromUserInfo", "fromUserInfo")
      .select([
        "guestbook",
        "fromUserInfo.id",
        "fromUserInfo.profile",
        "fromUserInfo.nickname",
        "fromUserInfo.username",
        "fromUserInfo.level",
      ])
      .where("guestbook.toUser = :userId", { userId })
      .orderBy("guestbook.createdAt", "DESC")
      .getMany();
    return result;
  }
  async createGuestbook(body: CreateGuestbookDTO) {
    const guestbook = new Guestbook();
    guestbook.toUser = body.toUser;
    guestbook.fromUser = body.fromUser;
    guestbook.content = body.content;
    guestbook.isPrivate = body.isPrivate;
    await this.guestbookRepository.save(guestbook);

    return {
      statusCode: 201,
      message: "방명록 등록완료",
    };
  }
  async updateGuestbook(body: UpdateGuestbookDTO) {
    const bookId = body.id;
    delete body.id;
    await this.guestbookRepository.update({ id: bookId }, body);
    return {
      statusCode: 200,
      message: "방명록 수정 완료",
    };
  }
  async deleteGuestbook(id: number) {
    await this.guestbookRepository.delete({ id });
    return {
      statusCode: 200,
      message: "방명록 삭제 완료",
    };
  }

  async getGuestbookCommentList(guestbookId: number) {
    const result = await this.guestbookCommentRepository
      .createQueryBuilder("guestbookComment")
      .leftJoinAndSelect("guestbookComment.userInfo", "userInfo")
      .select([
        "guestbookComment",
        "userInfo.id",
        "userInfo.profile",
        "userInfo.nickname",
        "userInfo.username",
        "userInfo.level",
      ])
      .where(
        "guestbookComment.guestbookId = :guestbookId AND isChildren = false",
        { guestbookId }
      )
      .orderBy("guestbookComment.createdAt", "ASC")
      .getMany();
    return result;
  }
  async getGuestbookCommentChildList(parentId: number) {
    const result = await this.guestbookCommentRepository
      .createQueryBuilder("guestbookComment")
      .leftJoinAndSelect("guestbookComment.userInfo", "userInfo")
      .select([
        "guestbookComment",
        "userInfo.id",
        "userInfo.profile",
        "userInfo.nickname",
        "userInfo.username",
        "userInfo.level",
      ])
      .where("guestbookComment.parentId = :parentId AND isChildren = true", {
        parentId,
      })
      .orderBy("guestbookComment.createdAt", "ASC")
      .getMany();
    return result;
  }
  async createGuestbookComment(body: CreateGuestbookCommentDTO) {
    const guestbookComment = new GuestbookComment();
    guestbookComment.guestbookId = body.guestbookId;
    guestbookComment.userId = body.userId;
    guestbookComment.parentId = body.parentId;
    guestbookComment.isChildren = body.isChildren;
    guestbookComment.imageUrl = body.imageUrl;
    guestbookComment.mp3Url = body.mp3Url;
    guestbookComment.youtubeUrl = body.youtubeUrl;
    guestbookComment.webUrl = body.webUrl;
    guestbookComment.content = body.content;
    await this.guestbookCommentRepository.save(guestbookComment);
    return {
      statusCode: 201,
      message: "댓글 등록완료",
    };
  }
  async updateGuestbookComment(body: UpdateGuestbookCommentDTO) {
    const bookId = body.id;
    delete body.id;
    await this.guestbookCommentRepository.update({ id: bookId }, body);
    return {
      statusCode: 200,
      message: "댓글 수정 완료",
    };
  }
  async deleteGuestbookComment(id: number) {
    await this.guestbookCommentRepository.delete({ id });
    return {
      statusCode: 200,
      message: "댓글 삭제 완료",
    };
  }

  async getMessageList(userId: number, type: number) {
    // type 1: 보낸쪽지 / 2: 받은쪽지
    let result;

    if (type === 1) {
      result = await this.messageRepository
        .createQueryBuilder("message")
        .leftJoinAndSelect("message.toUserInfo", "toUserInfo")
        .select([
          "message",
          "toUserInfo.id",
          "toUserInfo.profile",
          "toUserInfo.nickname",
          "toUserInfo.username",
          "toUserInfo.level",
        ])
        .where(
          "message.fromUser = :userId AND message.isFromUserDelete = false",
          {
            userId,
          }
        )
        .orderBy("message.createdAt", "DESC")
        .getMany();
    } else {
      result = await this.messageRepository
        .createQueryBuilder("message")
        .leftJoinAndSelect("message.fromUserInfo", "fromUserInfo")
        .select([
          "message",
          "fromUserInfo.id",
          "fromUserInfo.profile",
          "fromUserInfo.nickname",
          "fromUserInfo.username",
          "fromUserInfo.level",
        ])
        .where("message.toUser = :userId AND message.isToUserDelete = false", {
          userId,
        })
        .orderBy("message.createdAt", "DESC")
        .getMany();
    }

    return result;
  }

  async viewMessage(body: ViewMessageDTO) {
    await this.messageRepository.update(
      { id: body.messageId },
      {
        isView: true,
      }
    );
    return {
      statusCode: 200,
      message: "읽음처리 완료",
    };
  }
  async viewAllMessage(body: ViewAllMessageDTO) {
    await this.messageRepository.update(
      { id: body.userId },
      {
        isView: true,
      }
    );
    return {
      statusCode: 200,
      message: "읽음처리 완료",
    };
  }

  async createMessage(body: CreateMessageDTO) {
    const message = new Message();
    message.fromUser = body.fromUser;
    message.toUser = body.toUser;
    message.content = body.content;

    await this.messageRepository.save(message);
    return {
      statusCode: 201,
      message: "쪽지 전송 완료",
    };
  }

  async deleteMessage(body: DeleteMessageDTO) {
    if (body.action === "sent") {
      await this.messageRepository.update(
        { id: body.messageId },
        {
          isFromUserDelete: true,
        }
      );
    } else if (body.action === "received") {
      await this.messageRepository.update(
        { id: body.messageId },
        {
          isToUserDelete: true,
        }
      );
    }

    return {
      statusCode: 200,
      message: "댓글 삭제 완료",
    };
  }

  async deleteAllMessage(body: DeleteAllMessageDTO) {
    if (body.action === "sent") {
      await this.messageRepository.update(
        { fromUser: body.userId },
        {
          isFromUserDelete: true,
        }
      );
    } else if (body.action === "received") {
      await this.messageRepository.update(
        { toUser: body.userId },
        {
          isToUserDelete: true,
        }
      );
    }
  }
}
