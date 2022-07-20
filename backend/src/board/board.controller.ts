import {
  Controller,
  Body,
  Post,
  Delete,
  Patch,
  Param,
  Get,
  Put,
  UseGuards,
  Req,
} from "@nestjs/common";
import { BoardService } from "./board.service";
import { CreateBoardContentDTO } from "./dto/create-board.dto";
import { UpdateBoardContentDTO } from "./dto/update-board.dto";
import { CreateCommentDTO, UpdateCommentDTO } from "./dto/comment.dto";
import { Board, BoardContent, Comment } from "./entities/board.entity";
import { CreateCommentLikeDTO, CreateLikeDTO } from "./dto/like.dto";
import { CreateScrapDTO } from "./dto/scrap.dto";
import { BoardItemsPaginationDTO } from "./dto/board-pageination-result.dto";
import { IResponse } from "src/interface/response.interface";

import { Request } from "express";
import { CreateBoardDTO } from "./dto/board.dto";

@Controller("board")
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get("/feed/:page/:limit")
  getFeedList(@Param("page") page: number, @Param("limit") limit: number) {
    return this.boardService.getFeedList(page, limit);
  }
  @Get("/feed-personal/:userId/:page/:limit")
  getPersnalFeedList(
    @Param("userId") userId: number,
    @Param("page") page: number,
    @Param("limit") limit: number
  ) {
    return this.boardService.getPersnalFeedList(userId, page, limit);
  }

  @Get("/init")
  getBoardInitList(@Req() req: Request) {
    const pkgname: any = req.headers.pkgname;
    return this.boardService.getBoardInitList(pkgname);
  }

  @Post("/content") // Board 게시물 등록
  createBoardContent(
    @Body() boardData: CreateBoardContentDTO,
    @Req() req: Request
  ): Promise<IResponse> {
    // const pkgname: any = req.headers.pkgname;
    return this.boardService.createBoardContent(boardData);
  }

  @Get("/content/:contentKey")
  getOneBoardContent(@Param("contentKey") contentKey: string) {
    // const pkgname: any = req.headers.pkgname;
    return this.boardService.getOneBoardContent(contentKey);
  }

  @Get("/list/:topic/:page/:limit")
  getBoardGroup(
    @Param("topic") topic: string,
    @Param("page") page: number,
    @Param("limit") limit: number,
    @Req() req: Request
  ): Promise<Board> {
    // const pkgname: any = req.headers.pkgname;
    return this.boardService.getBoardGroup(topic, page, limit);
  }

  @Post("/") // Board  등록
  createBoard(
    @Body() body: CreateBoardDTO,
    @Req() req: Request
  ): Promise<Board> {
    return this.boardService.createBoard(body);
  }

  @Put("/")
  updateBoard(@Body() boardData: any) {
    return this.boardService.updateBoard(boardData);
  }

  @Put("/content")
  updateBoardContent(@Body() boardData: UpdateBoardContentDTO) {
    return this.boardService.updateBoardContent(boardData);
  }

  @Post("/comment")
  createComment(@Body() boardData: CreateCommentDTO, @Req() req: Request) {
    const pkgname: any = req.headers.pkgname;
    return this.boardService.createComment(boardData, pkgname);
  }

  @Put("/comment")
  updateComment(@Body() body: UpdateCommentDTO) {
    return this.boardService.updateComment(body);
  }

  @Delete("/comment/:commentKey")
  deleteComment(@Param("commentKey") commentKey: string) {
    return this.boardService.deleteComment(commentKey);
  }

  @Get("/comment/:contentKey")
  getComments(@Param("contentKey") contentKey: string): Promise<Comment[]> {
    return this.boardService.getComments(contentKey);
  }

  @Get("/comment-childrens/:commentKey")
  getCommentChildrens(
    @Param("commentKey") commentKey: string
  ): Promise<Comment[]> {
    return this.boardService.getCommentChildrens(commentKey);
  }

  @Get("/:boardKey/:page/:limit/:sort/:orderBy/:showReserve")
  getBoardList(
    @Param("boardKey") boardKey: string,
    @Param("page") page: number,
    @Param("limit") limit: number,
    @Param("sort") sort: number,
    @Param("orderBy") orderBy: "ASC" | "DESC",
    @Param("showReserve") showReserve: boolean,
    @Req() req: Request
  ): Promise<any> {
    const pkgname: any = req.headers.pkgname;
    return this.boardService.getBoardList(
      boardKey,
      page,
      limit,
      pkgname,
      sort,
      orderBy,
      showReserve
    );
  }

  @Get("/search/:searchText/:boardKey/:page/:limit/:sort/:orderBy/:showReserve")
  getBoardContentSearchList(
    @Param("searchText") searchText: string,
    @Param("boardKey") boardKey: string,
    @Param("page") page: number,
    @Param("limit") limit: number,
    @Param("sort") sort: number,
    @Param("orderBy") orderBy: "ASC" | "DESC",
    @Param("showReserve") showReserve: boolean,
    @Req() req: Request
  ): Promise<any> {
    const pkgname: any = req.headers.pkgname;
    return this.boardService.getBoardList(
      boardKey,
      page,
      limit,
      pkgname,
      sort,
      orderBy,
      showReserve,
      searchText
    );
  }

  @Patch("/view-increment/:bo_id")
  incrementViewCount(@Param("bo_id") bo_id: number): Promise<void> {
    return this.boardService.incrementViewCount(bo_id);
  }

  @Post("/like")
  actionLike(@Body() likeData: CreateLikeDTO): Promise<boolean> {
    return this.boardService.actionLike(likeData);
  }

  @Post("/comment/like")
  likeComment(@Body() likeData: CreateCommentLikeDTO): Promise<any> {
    return this.boardService.likeComment(likeData);
  }

  @Post("/scrap")
  actionScrap(@Body() scrapData: CreateScrapDTO): Promise<boolean> {
    return this.boardService.actionScrap(scrapData);
  }

  @Patch("/share-increment/:bo_id")
  incrementShareCount(@Param("bo_id") bo_id: number): Promise<void> {
    return this.boardService.incrementShareCount(bo_id);
  }

  @Get("/:boardKey")
  getOne(@Param("boardKey") boardKey: string): Promise<Board> {
    return this.boardService.getOneBoard(boardKey);
  }
  @Delete("/:boardKey")
  deleteBoard(@Param("boardKey") boardKey: string): Promise<IResponse> {
    return this.boardService.deleteBoard(boardKey);
  }
  @Delete("/content/:contentKey")
  deleteBoardContent(
    @Param("contentKey") contentKey: string
  ): Promise<IResponse> {
    return this.boardService.deleteBoardContent(contentKey);
  }
}
