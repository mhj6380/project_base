import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  Board,
  BoardContent,
  Comment,
  CommentLike,
  Like,
  Scrap,
} from "./entities/board.entity";
import { Repository } from "typeorm";
import { CreateBoardContentDTO } from "./dto/create-board.dto";
import { UpdateBoardContentDTO } from "./dto/update-board.dto";
import { CreateCommentDTO, UpdateCommentDTO } from "./dto/comment.dto";
import { CreateCommentLikeDTO, CreateLikeDTO } from "./dto/like.dto";
import { CreateScrapDTO } from "./dto/scrap.dto";
import { BoardItemsPaginationDTO } from "./dto/board-pageination-result.dto";
import { IResponse } from "src/interface/response.interface";
import { ContentTemplate } from "./entities/template.entity";
import { CreateTemplateDTO } from "./dto/template.dto";
import { CreateBoardDTO, UpdateBoardDTO } from "./dto/board.dto";

import dayjs = require("dayjs");

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
    @InjectRepository(BoardContent)
    private readonly boardContentRepository: Repository<BoardContent>,
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    @InjectRepository(Like)
    private readonly likeRepository: Repository<Like>,
    @InjectRepository(CommentLike)
    private readonly commentLikeRepository: Repository<CommentLike>,
    @InjectRepository(Scrap)
    private readonly scrapRepository: Repository<Scrap>,
    @InjectRepository(ContentTemplate)
    private readonly contentTemplateRepository: Repository<ContentTemplate>
  ) {}

  async getFeedList(page: number, limit: number) {
    const offset = (page - 1) * limit;
    const result = await this.boardContentRepository
      .createQueryBuilder("boardContent")
      .leftJoinAndSelect("boardContent.authorInfo", "authorInfo")
      .select([
        "boardContent.id",
        "boardContent.contentKey",
        "boardContent.wrapperKey",
        "boardContent.templateKey",
        "boardContent.title",
        "boardContent.subTitle",
        "boardContent.theme",
        "boardContent.tags",
        "boardContent.likeCount",
        "boardContent.scrapCount",
        "boardContent.shareCount",
        "boardContent.viewCount",
        "boardContent.commentCount",
        "boardContent.thumbnail",
        "boardContent.createdAt",
        "boardContent.reservedAt",
        "boardContent.visibleLevel",
        "boardContent.blockPremium",
        "boardContent.isPremium",
        "boardContent.contentType",
        "boardContent.publicType",
        "boardContent.imageList",
        "boardContent.webUrl",
        "boardContent.youtubeUrl",
        "boardContent.content",
        "authorInfo.id",
        "authorInfo.profile",
        "authorInfo.nickname",
        "authorInfo.username",
        "authorInfo.level",
      ])
      .where("boardContent.contentType = :type", {
        type: "feed",
        // publicType: 1,
      })
      // .orderBy("boardContent.createdAt", "DESC")
      .orderBy("boardContent.id", "ASC")
      .skip(offset)
      .take(limit)
      .getMany();

    result.map((item) => (item.imageList = JSON.parse(item.imageList)));

    return result;
  }
  async getPersnalFeedList(userId: number, page: number, limit: number) {
    const offset = (page - 1) * limit;
    const result = await this.boardContentRepository
      .createQueryBuilder("boardContent")
      .leftJoinAndSelect("boardContent.authorInfo", "authorInfo")
      .select([
        // "boardContent.id",
        "boardContent.contentKey",
        "boardContent.wrapperKey",
        "boardContent.templateKey",
        "boardContent.title",
        "boardContent.subTitle",
        "boardContent.theme",
        "boardContent.tags",
        "boardContent.likeCount",
        "boardContent.scrapCount",
        "boardContent.shareCount",
        "boardContent.viewCount",
        "boardContent.commentCount",
        "boardContent.thumbnail",
        "boardContent.createdAt",
        "boardContent.reservedAt",
        "boardContent.visibleLevel",
        "boardContent.blockPremium",
        "boardContent.isPremium",
        "boardContent.contentType",
        "boardContent.imageList",
        "boardContent.publicType",
        "boardContent.webUrl",
        "boardContent.youtubeUrl",
        "boardContent.content",
        "authorInfo.id",
        "authorInfo.profile",
        "authorInfo.nickname",
        "authorInfo.username",
        "authorInfo.level",
      ])
      .where("boardContent.contentType = :type AND author = :userId", {
        type: "feed",
        userId,
      })
      .orderBy("boardContent.createdAt", "DESC")
      .skip(offset)
      .take(limit)
      .getMany();

    result.map((item) => (item.imageList = JSON.parse(item.imageList)));

    return result;
  }
  async getOneBoardContent(contentKey: string) {
    const content = await this.boardContentRepository
      .createQueryBuilder("content")
      .leftJoinAndSelect("content.authorInfo", "authorInfo")
      .select([
        "content.boardKey",
        "content.contentKey",
        "content.wrapperKey",
        "content.templateKey",
        "content.title",
        "content.subTitle",
        "content.thumbnail",
        "content.tags",
        "content.visibleLevel",
        "content.likeCount",
        "content.scrapCount",
        "content.shareCount",
        "content.viewCount",
        "content.commentCount",
        "content.createdAt",
        "content.reservedAt",
        "content.content",
        "content.widgetInfo",
        "content.isPremium",
        "content.blockPremium",
        "content.youtubeUrl",
        "content.webUrl",
        "content.imageList",
        "authorInfo.id",
        "authorInfo.profile",
        "authorInfo.nickname",
        "authorInfo.username",
        "authorInfo.level",
      ])
      .where("content.contentKey = :contentKey", { contentKey })
      .getOne();

    const comments = await this.commentRepository
      .createQueryBuilder("boardComment")
      .leftJoinAndSelect("boardComment.authorInfo", "authorInfo")
      .select([
        "boardComment.commentKey",
        "boardComment.content",
        "boardComment.likeCount",
        "boardComment.createdAt",
        "boardComment.isChildren",
        "boardComment.childCount",
        "boardComment.imageUrl",
        "boardComment.mp3Url",
        "boardComment.youtubeUrl",
        "boardComment.webUrl",
        "authorInfo.id",
        "authorInfo.profile",
        "authorInfo.nickname",
        "authorInfo.username",
        "authorInfo.level",
      ])
      .where("boardComment.contentKey = :contentKey", { contentKey })
      .andWhere("boardComment.isChildren = :isChildren", { isChildren: false })
      .getMany();

    if (!isJson(content.content))
      throw new BadRequestException(
        `content가 JSON형태가 아닙니다. | contentKey: ${content.contentKey}`
      );
    // if (!isJson(content.widgetInfo))
    //   throw new BadRequestException(
    //     `widgetInfo가 JSON형태가 아닙니다. | contentKey: ${content.contentKey}`
    //   );

    content.content = JSON.parse(content.content);
    // content.widgetInfo = JSON.parse(content.widgetInfo);
    content.comments = comments;

    if (!content)
      throw new NotFoundException(
        `Not Found Content contentKey: ${contentKey}`
      );

    return content;
  }
  async getBoardInitList(pkgname) {
    const boards = [];

    const targetBoards = await this.boardRepository.find({ appKey: pkgname });
    const functionWithPromise = (item) => {
      //a function that returns a promise
      return Promise.resolve("ok");
    };

    const anAsyncFunction = async (item) => {
      boards.push(
        await this.getBoardList(item.boardKey, 1, 10, pkgname, 1, "DESC", true)
      );
      return functionWithPromise(item);
    };

    const getData = async () => {
      return Promise.all(targetBoards.map((item) => anAsyncFunction(item)));
    };

    await getData();
    return boards;
  }

  async getBoardGroup(topic, page, limit): Promise<Board> {
    let templates;
    const offset = (page - 1) * limit;
    if (topic === "all") {
      templates = await this.boardRepository
        .createQueryBuilder()
        // .where("appKey=:pkgname", { pkgname })
        .skip(offset)
        .take(limit)
        .orderBy("createdAt", "DESC")
        .getMany();
    } else {
      templates = await this.boardRepository
        .createQueryBuilder()
        .where("topic = :topic", { topic })
        .skip(offset)
        .take(limit)
        // .andWhere("appKey=:pkgname", { pkgname })
        .orderBy("createdAt", "DESC")
        .getMany();
    }

    return templates;
  }

  async getComments(contentKey: string): Promise<Comment[]> {
    const comments = await this.commentRepository
      .createQueryBuilder("boardComment")
      .leftJoinAndSelect("boardComment.authorInfo", "authorInfo")
      .select([
        "boardComment.commentKey",
        "boardComment.content",
        "boardComment.likeCount",
        "boardComment.createdAt",
        "boardComment.isChildren",
        "boardComment.childCount",
        "boardComment.imageUrl",
        "boardComment.mp3Url",
        "boardComment.youtubeUrl",
        "boardComment.webUrl",
        "authorInfo.id",
        "authorInfo.profile",
        "authorInfo.nickname",
        "authorInfo.username",
        "authorInfo.level",
      ])
      .where("boardComment.contentKey = :contentKey", {
        contentKey,
      })
      .andWhere("boardComment.isChildren = :isChildren", { isChildren: false })
      .getMany();

    return comments;
  }

  async getCommentChildrens(parentCommentKey): Promise<Comment[]> {
    const comments = await this.commentRepository
      .createQueryBuilder("boardComment")
      .leftJoinAndSelect("boardComment.authorInfo", "authorInfo")
      .select([
        "boardComment.commentKey",
        "boardComment.content",
        "boardComment.likeCount",
        "boardComment.createdAt",
        "boardComment.isChildren",
        "boardComment.childCount",
        "boardComment.imageUrl",
        "boardComment.mp3Url",
        "boardComment.youtubeUrl",
        "boardComment.webUrl",
        "authorInfo.id",
        "authorInfo.profile",
        "authorInfo.nickname",
        "authorInfo.username",
        "authorInfo.level",
      ])
      .where("boardComment.parentCommentKey = :parentCommentKey", {
        parentCommentKey,
      })
      .andWhere("boardComment.isChildren = :isChildren", { isChildren: true })
      .getMany();

    return comments;
  }

  async createBoard(
    boardData: CreateBoardDTO
    // pkgname: string
  ): Promise<Board> {
    const board = new Board();

    // board.appKey = pkgname;
    board.title = boardData.title;
    board.boardType = boardData.boardType;
    board.topic = boardData.topic;
    board.defaultTemplateKey = boardData.defaultTemplateKey;
    board.defaultWrapperKey = boardData.defaultWrapperKey;
    board.morePageWrapperKey = boardData.morePageWrapperKey;
    board.commentTemplateKey = boardData.commentTemplateKey;
    board.commentWrapperKey = boardData.commentWrapperKey;

    board.permLvWrite = boardData.permLvWrite;
    board.permLvWriteComment = boardData.permLvWriteComment;
    board.permLvViewContentList = boardData.permLvViewContentList;
    board.permLvViewContent = boardData.permLvViewContent;
    board.permLvViewComment = boardData.permLvViewComment;

    await this.boardRepository.save(board);

    return board;
  }

  async createBoardContent(body: CreateBoardContentDTO): Promise<IResponse> {
    const boardContent = new BoardContent();

    // boardContent.appKey = pkgname;
    boardContent.boardKey = body.boardKey;
    boardContent.contentKey = body.contentKey;
    boardContent.wrapperKey = body.wrapperKey;
    boardContent.templateKey = body.templateKey;
    boardContent.title = body.title;
    boardContent.subTitle = body.subTitle;
    boardContent.content = body.content;
    boardContent.author = body.author;
    boardContent.tags = body.tags;
    boardContent.isPremium = body.isPremium;
    boardContent.blockPremium = body.blockPremium;
    boardContent.visibleLevel = body.visibleLevel;
    boardContent.thumbnail = body.thumbnail;
    boardContent.contentType = body.contentType;
    boardContent.imageList = body.imageList;
    boardContent.youtubeUrl = body.youtubeUrl;
    boardContent.webUrl = body.webUrl;
    boardContent.publicType = body.publicType;

    boardContent.reservedAt = body.reservedAt
      ? new Date(body.reservedAt)
      : new Date();
    // boardContent.useWidget = body.useWidget;

    await this.boardContentRepository.save(boardContent);

    return {
      statusCode: 200,
      message: "등록이 완료되었습니다.",
    };
  }

  async updateBoard(updateData: UpdateBoardDTO): Promise<void> {
    await this.boardRepository.update(
      { boardKey: updateData.boardKey },
      updateData
    );
  }

  async updateBoardContent(updateData: UpdateBoardContentDTO): Promise<void> {
    await this.boardContentRepository.update(
      { contentKey: updateData.contentKey },
      updateData
    );
  }

  async getOneBoard(boardKey: string): Promise<Board> {
    // const boardWithComments = await this.boardContentRepository
    //   .createQueryBuilder('board')
    //   .leftJoinAndSelect('board.authorInfo', 'authorInfo')
    //   .leftJoinAndSelect(
    //     'board.comments',
    //     'comments',
    //     'comments.isChildren = :isChildren',
    //     { isChildren: 0 },
    //   )
    //   .where('board.id = :id', { id })
    //   .getOne();

    const boards = await this.boardRepository
      .createQueryBuilder("board")
      .where("board.boardKey = :boardKey", { boardKey })
      .getOne();

    if (!boards) throw new NotFoundException(`Not Found Board ID:${boardKey}`);

    return boards;
  }

  // async getOneBoardContent(boardKey: string): Promise<BoardContent> {
  //   // const boardWithComments = await this.boardContentRepository
  //   //   .createQueryBuilder('board')
  //   //   .leftJoinAndSelect('board.authorInfo', 'authorInfo')
  //   //   .leftJoinAndSelect(
  //   //     'board.comments',
  //   //     'comments',
  //   //     'comments.isChildren = :isChildren',
  //   //     { isChildren: 0 },
  //   //   )
  //   //   .where('board.id = :id', { id })
  //   //   .getOne();

  //   const boards = await this.boardContentRepository
  //     .createQueryBuilder("board")
  //     .leftJoinAndSelect("board.authorInfo", "authorInfo")
  //     .where("board.boardKey = :boardKey", { boardKey })
  //     .getOne();

  //   const comments = await this.commentRepository
  //     .createQueryBuilder("boardComment")
  //     .leftJoinAndSelect("boardComment.authorInfo", "authorInfo")
  //     .where("boardComment.boardKey = :boardKey", { boardKey })
  //     .where("boardComment.isChildren = :isChildren", { isChildren: 0 })
  //     .getMany();

  //   console.log(boards);
  //   // boards.comments = comments;

  //   if (!boards) throw new NotFoundException(`Not Found Board ID:${boardKey}`);

  //   return boards;
  // }
  async deleteBoard(boardKey: string): Promise<any> {
    const board = await this.boardRepository
      .createQueryBuilder()
      .where("boardKey = :boardKey", { boardKey })
      .getOne();

    if (!board)
      throw new BadRequestException(
        `존재하지 않는 게시판입니다. boardKey: ${boardKey}`
      );

    const pageValidate = await this.boardContentRepository.query(
      `SELECT pageKey FROM app_page WHERE pageInfo LIKE '%${boardKey}%'`
    );
    const widgetValidate = await this.boardContentRepository.query(
      `SELECT widgetKey FROM app_page_widget WHERE widgetInfo LIKE '%${boardKey}%'`
    );

    if (pageValidate.length > 0 || widgetValidate.length > 0) {
      return {
        isDelete: false,
        message:
          "다른 위젯 또는 페이지에서 사용중인 게시판은 삭제하실 수 없습니다.",
        inUseWidgets: widgetValidate,
        inUsePages: pageValidate,
      };
    } else {
      await this.boardRepository.delete({ boardKey });
      return {
        isDelete: true,
        message: "게시판이 삭제되었습니다.",
        inUseWidgets: [],
        inUsePages: [],
      };
    }
  }

  async deleteBoardContent(contentKey: string): Promise<any> {
    const content = await this.boardContentRepository.findOne({ contentKey });

    if (!content)
      throw new BadRequestException(
        `존재하지 않는 콘텐츠입니다. contentKey: ${contentKey}`
      );

    await this.boardContentRepository.delete({ contentKey });
    await this.boardRepository.decrement(
      { boardKey: content.boardKey },
      "contentCount",
      1
    );
    return {
      isDelete: true,
      message: "콘텐츠가 삭제되었습니다.",
      inUseWidgets: [],
      inUsePages: [],
    };
  }

  //댓글 생성
  async createComment(
    commentData: CreateCommentDTO,
    pkgname: string
  ): Promise<IResponse> {
    const comment = new Comment();

    if (commentData.parentCommentKey) {
      const parent = await this.commentRepository.findOne({
        commentKey: commentData.parentCommentKey,
      });

      //대댓글 수 ++
      await this.commentRepository.increment(
        { commentKey: commentData.parentCommentKey },
        "childCount",
        1
      );

      // 대댓글인 경우
      comment.appKey = pkgname;
      comment.content = commentData.content;
      comment.author = commentData.author;
      // comment.topic = commentData.topic;
      comment.contentKey = commentData.contentKey;
      comment.boardKey = commentData.boardKey;

      comment.imageUrl = commentData.imageUrl;
      comment.mp3Url = commentData.mp3Url;
      comment.youtubeUrl = commentData.youtubeUrl;
      comment.webUrl = commentData.webUrl;

      console.log(parent);

      comment.parent = parent;
      comment.isChildren = true;

      await this.commentRepository.save(comment);

      //게시물 댓글 수 ++
      await this.boardContentRepository.increment(
        { contentKey: commentData.contentKey },
        "commentCount",
        1
      );
    } else {
      // 일반 댓글인 경우
      comment.content = commentData.content;
      comment.author = commentData.author;
      // comment.topic = commentData.topic;
      comment.contentKey = commentData.contentKey;
      comment.boardKey = commentData.boardKey;
      comment.isChildren = false;

      comment.imageUrl = commentData.imageUrl;
      comment.mp3Url = commentData.mp3Url;
      comment.youtubeUrl = commentData.youtubeUrl;
      comment.webUrl = commentData.webUrl;

      await this.commentRepository.save(comment);

      //게시물 댓글 수 ++
      await this.boardContentRepository.increment(
        { contentKey: commentData.contentKey },
        "commentCount",
        1
      );
    }

    console.log(comment);

    const commentModel = await this.commentRepository
      .createQueryBuilder("boardComment")
      .leftJoinAndSelect("boardComment.authorInfo", "authorInfo")
      .select([
        "boardComment.commentKey",
        "boardComment.content",
        "boardComment.likeCount",
        "boardComment.createdAt",
        "boardComment.isChildren",
        "boardComment.childCount",
        "boardComment.imageUrl",
        "boardComment.mp3Url",
        "boardComment.youtubeUrl",
        "boardComment.webUrl",
        "authorInfo.id",
        "authorInfo.profile",
        "authorInfo.nickname",
        "authorInfo.username",
        "authorInfo.level",
      ])
      .where("boardComment.id = :id", {
        id: comment.commentKey,
      })
      .getOne();

    console.log(commentModel);

    return {
      statusCode: 200,
      message: "댓글이 등록되었습니다.",
      item: commentModel,
    };
  }

  // 댓글 수정
  async updateComment(updateData: UpdateCommentDTO): Promise<IResponse> {
    await this.commentRepository.update(
      { commentKey: updateData.commentKey },
      updateData
    );

    return {
      statusCode: 200,
      message: "댓글이 수정되었습니다.",
    };
  }

  // 댓글 삭제
  async deleteComment(commentKey: string): Promise<IResponse> {
    const comment = await this.commentRepository.findOne({ commentKey });

    await this.commentRepository.delete({ commentKey });
    await this.commentRepository.decrement(
      { commentKey: comment.parentCommentKey },
      "childCount",
      1
    );
    //게시물 댓글 수 --
    await this.boardContentRepository.decrement(
      { contentKey: comment.contentKey },
      "commentCount",
      1
    );

    return {
      statusCode: 200,
      message: "댓글이 삭제되었습니다.",
    };
  }

  async getBoardList(
    boardKey: string,
    page: number,
    limit: number,
    pkgname: string,
    sort: number,
    orderBy: "ASC" | "DESC",
    showReserve: boolean,
    searchText?: string
  ): Promise<any> {
    // sort
    // 1: 최신순
    // 2: 좋아요순 (인기순)
    // 3: 조회수 순
    // 4: 댓글수
    // 5: 랜덤

    // orderBy : ASC || DESC
    const today = dayjs().format("YYYY-MM-DD HH:mm:ss");

    let querySort;
    switch (sort) {
      case 1:
        querySort = "reservedAt";
        break;
      case 2:
        querySort = "likeCount";
        break;
      case 3:
        querySort = "viewCount";
        break;
      case 4:
        querySort = "commentCount";
        break;
      case 5:
        querySort = "RAND()";
        break;
      default:
        querySort = "reservedAt";
        break;
    }

    const skippedItems = (page - 1) * limit;

    // const board = await this.boardRepository.findOne();
    // console.log(boardKey);
    // console.log(board);
    // if (!board) throw new BadRequestException("존재하지 않는 boardKey");
    const boardItemsQueryBuilder = await this.boardContentRepository
      .createQueryBuilder("boardContent")
      .leftJoinAndSelect("boardContent.authorInfo", "authorInfo")
      .select([
        // "boardContent.id",
        "boardContent.contentKey",
        "boardContent.wrapperKey",
        "boardContent.templateKey",
        "boardContent.title",
        "boardContent.subTitle",
        "boardContent.theme",
        "boardContent.tags",
        "boardContent.likeCount",
        "boardContent.scrapCount",
        "boardContent.shareCount",
        "boardContent.viewCount",
        "boardContent.commentCount",
        "boardContent.thumbnail",
        "boardContent.createdAt",
        "boardContent.reservedAt",
        "boardContent.visibleLevel",
        "boardContent.blockPremium",
        "boardContent.isPremium",
        "boardContent.contentType",
        "authorInfo.id",
        "authorInfo.profile",
        "authorInfo.nickname",
        "authorInfo.username",
        "authorInfo.level",
      ])
      .where(
        showReserve
          ? `boardContent.boardKey=:boardKey`
          : `boardContent.boardKey=:boardKey AND boardContent.reservedAt < "${today}"`,
        { boardKey }
      );

    if (searchText) {
      boardItemsQueryBuilder.andWhere(`title LIKE '%${searchText}%'`, {});
    }

    const boardItems = await boardItemsQueryBuilder
      .orderBy(sort === 5 ? querySort : `boardContent.${querySort}`, orderBy)
      .offset(skippedItems)
      .limit(limit)
      .getMany();

    // console.log(board);

    return {
      // totalCount: board.contentCount,
      boardKey,
      page,
      limit,
      // board,
      boardItems: boardItems,
    };
  }

  //조회 수 증가
  async incrementViewCount(id: number): Promise<void> {
    await this.boardContentRepository.increment({ id }, "viewCount", 1);
  }

  async actionLike(likeData: CreateLikeDTO): Promise<any> {
    const { userId, contentKey } = likeData;
    const current = await this.likeRepository.findOne({ userId, contentKey });

    //토글 형태
    if (current) {
      // 이미 있을경우 제거 & 카운트 --
      await this.likeRepository.remove(current);
      await this.boardContentRepository.decrement(
        { contentKey },
        "likeCount",
        1
      );
      return {
        status: false,
        statusCode: 200,
        message: "좋아요 취소",
      };
    } else {
      // 없을경우 추가 & 카운트 ++
      const like = new Like();
      like.userId = userId;
      like.contentKey = contentKey;

      await this.likeRepository.save(like);
      await this.boardContentRepository.increment(
        { contentKey },
        "likeCount",
        1
      );
      return {
        status: true,
        statusCode: 200,
        message: "좋아요 완료",
      };
    }
  }
  async likeComment(likeData: CreateCommentLikeDTO): Promise<any> {
    const { userId, commentKey } = likeData;
    const current = await this.commentLikeRepository.findOne({
      userId,
      commentKey,
    });
    // const current = await this.commentLikeRepository.findOne({
    //   userId,
    //   commentKey,
    // });
    // //토글 형태
    if (current) {
      // 이미 있을경우 제거 & 카운트 --
      await this.commentLikeRepository.remove(current);
      await this.commentRepository.decrement({ commentKey }, "likeCount", 1);
      return false;
    } else {
      // 없을경우 추가 & 카운트 ++
      const like = new CommentLike();
      like.userId = userId;
      like.commentKey = commentKey;
      await this.commentLikeRepository.save(like);
      await this.commentRepository.increment({ commentKey }, "likeCount", 1);
      return true;
    }
  }

  async actionScrap(scrapData: CreateScrapDTO): Promise<boolean> {
    const { userId, contentKey } = scrapData;
    const current = await this.scrapRepository.findOne({ userId, contentKey });

    //토글 형태
    if (current) {
      // 이미 있을경우 제거 & 카운트 --
      await this.scrapRepository.remove(current);
      await this.boardContentRepository.decrement(
        { contentKey },
        "scrapCount",
        1
      );

      return false;
    } else {
      const scrap = new Scrap();
      scrap.userId = scrapData.userId;
      scrap.contentKey = scrapData.contentKey;

      await this.scrapRepository.save(scrap);
      await this.boardContentRepository.increment(
        { contentKey: scrapData.contentKey },
        "scrapCount",
        1
      );

      return true;
    }
  }

  //공유 수 증가
  async incrementShareCount(id: number): Promise<void> {
    await this.boardContentRepository.increment({ id }, "shareCount", 1);
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
