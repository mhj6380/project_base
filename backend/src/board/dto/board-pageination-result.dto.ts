import { BoardContent } from "../entities/board.entity";

export class BoardItemsPaginationDTO {
  readonly boardItems: BoardContent[];
  readonly page: number;
  readonly limit: number;
  readonly boardKey?: string;
}
