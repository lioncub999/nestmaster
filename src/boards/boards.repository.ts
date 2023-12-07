import { CustomRepository } from "src/configs/db/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { Board } from "./boards.entity";
import { CreateBoardDto } from "./dto/create-boards.dto";
import { BoardStatus } from "./boards.model";
import { NotFoundException } from "@nestjs/common";
import { User } from "src/auth/user.entity";

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
  async getBoardById(id: number, user: User): Promise<Board> {
    const found = await this.findOne({ where: { id, userId: user.id } });

    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async getAllBoards(user: User): Promise<Board[]> {
    const query = this.createQueryBuilder("board");

    query.where("board.userId = :userId", { userId: user.id });

    const boards = await query.getMany();
    return boards;
  }

  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User
  ): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = new Board();
    board.title = title;
    board.description = description;
    board.status = BoardStatus.PUBLIC;
    board.user = user;
    await board.save();

    return board;
  }

  async deleteBoard(id: number, user: User): Promise<void> {
    const result = await this.delete({ id, userId: user.id });

    if ((await result).affected === 0) {
      throw new NotFoundException(`${id} 아이디는 없음`);
    }
  }

  async updateBoard(
    id: number,
    status: BoardStatus,
    user: User
  ): Promise<Board> {
    const board = await this.getBoardById(id, user);

    board.status = status;
    await board.save();
    return board;
  }
}
