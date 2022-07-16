import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeUpdate,
  OneToOne,
  Tree,
  TreeChildren,
  TreeParent,
} from "typeorm";
import { User } from "../../auth/entities/auth.entity";
import * as uuid from "uuid";

@Entity("board")
export class Board {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
    this.boardKey = uuid.v4();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  appKey: string;

  @Column({ length: 200 })
  boardKey: string;

  @Column({ length: 100 })
  boardType: string;

  @Column({ length: 100 })
  topic: string;

  @Column({ length: 255 })
  title: string;

  @Column()
  defaultTemplateKey: string;

  @Column()
  defaultWrapperKey: string;

  @Column()
  morePageWrapperKey: string; // 더보기 클릭시 페이지 Wrapper

  @Column()
  commentTemplateKey: string; // 댓글 템플릿

  @Column()
  commentWrapperKey: string; // 댓글 Wrapper Key

  @Column()
  permLvWrite: number;

  @Column()
  permLvWriteComment: number;

  @Column()
  permLvViewContentList: number;

  @Column()
  permLvViewContent: number;

  @Column()
  permLvViewComment: number;

  @Column()
  contentCount: number;

  @Column()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity("board_content")
export class BoardContent {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @Column()
  id: number;

  @Column()
  appKey: string;

  @Column({ length: 255 })
  boardKey: string;

  @PrimaryGeneratedColumn()
  contentKey: string;

  @Column({ length: 255 })
  wrapperKey: string;
  @Column({ length: 255 })
  templateKey: string;

  @Column({ length: 255 })
  topic: string;

  @Column({ length: 200 })
  title: string;

  @Column({ length: 200 })
  subTitle: string;

  @Column()
  content: string;

  @Column()
  author: number;

  @Column({ length: 200 })
  thumbnail?: string;

  @Column({ length: 100, nullable: false })
  tags: string;

  @Column()
  blockPremium: boolean;

  @Column()
  isPremium: boolean;

  @Column()
  visibleLevel: number;

  @Column()
  likeCount: number;

  @Column()
  scrapCount: number;

  @Column()
  shareCount: number;

  @Column()
  viewCount: number;

  @Column()
  commentCount: number;

  @Column()
  publicType: number; //  1: 전체공개 | 2: 친구공개  | 3: 나만보기

  @Column()
  contentType: string;
  @Column()
  widgetInfo: string;
  @Column()
  youtubeUrl: string;
  @Column()
  webUrl: string;
  @Column()
  imageList: string;

  @Column()
  createdAt: Date;

  @Column()
  reservedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @JoinColumn({ name: "comments" })
  @OneToMany((type) => Comment, (comment) => comment.board)
  comments: Comment[];

  @OneToOne((type) => User)
  @JoinColumn({ name: "author", referencedColumnName: "id" })
  authorInfo: User;

  // @Column()
  // useWidget: boolean;
}

@Entity("board_content_comment")
@Tree("materialized-path")
export class Comment {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
    this.commentKey = uuid.v4();
  }

  @Column()
  id: number;

  @Column()
  appKey: string;

  @Column()
  boardKey: string;
  @Column()
  contentKey: string;

  @PrimaryGeneratedColumn()
  commentKey: string;

  @Column({ length: 1000 })
  content: string;

  @Column()
  author: number;

  @Column({ length: 200 })
  topic: string;

  @Column()
  likeCount: number;

  @Column()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  isChildren: boolean;

  @Column()
  childCount: number;

  @Column()
  parentCommentKey: string;

  @Column()
  imageUrl: string;

  @Column()
  mp3Url: string;

  @Column()
  youtubeUrl: string;

  @Column()
  webUrl: string;

  @ManyToOne((type) => BoardContent, (boardContent) => boardContent.comments)
  @JoinColumn({ name: "boardKey" })
  board: BoardContent;

  @OneToOne((type) => User)
  @JoinColumn({ name: "author", referencedColumnName: "id" })
  authorInfo: User;

  // @OneToMany((type) => Comment, (comment) => comment.parent)
  @TreeChildren()
  children: Comment[];

  // @ManyToOne((type) => Comment, (comment) => comment.children)
  @TreeParent()
  parent: Comment;
}

@Entity("boardLike")
export class Like {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  contentKey: string;

  @Column()
  createdAt: Date;
}

@Entity("comment_like")
export class CommentLike {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  commentKey: string;

  @Column()
  createdAt: Date;
}

@Entity("boardScrap")
export class Scrap {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  contentKey: string;

  @Column()
  createdAt: Date;
}
