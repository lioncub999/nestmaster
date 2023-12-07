/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from "@nestjs/common";
import { Board, BoardStatus } from "./boards.model";
import { InjectRepository } from "@nestjs/typeorm";
import { BoardRepository } from "./boards.repository";
import { CreateBoardDto } from "./dto/create-boards.dto";
import { User } from "src/auth/user.entity";

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository
  ) {}

  async getAllBoards(user: User): Promise<Board[]> {
    return this.boardRepository.getAllBoards(user);
  }

  async getBoardById(id: number, user: User): Promise<Board> {
    return this.boardRepository.getBoardById(id, user);
  }

  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User
  ): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto, user);
  }

  async deleteBoard(id: number, user: User): Promise<void> {
    return this.boardRepository.deleteBoard(id, user);
  }

  async updateBoard(
    id: number,
    status: BoardStatus,
    user: User
  ): Promise<Board> {
    return this.boardRepository.updateBoard(id, status, user);
  }
}
