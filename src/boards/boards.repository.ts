import { CustomRepository } from 'src/configs/db/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Board } from './boards.entity';
import { CreateBoardDto } from './dto/create-boards.dto';
import { BoardStatus } from './boards.model';
import { NotFoundException } from '@nestjs/common';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
  async getBoardById(id: number): Promise<Board> {
    const found = await this.findOneBy({ id });

    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async getAllBoards(): Promise<Board[]> {
    return this.find();
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = new Board();
    board.title = title;
    board.description = description;
    board.status = BoardStatus.PUBLIC;
    await board.save();

    return board;
  }

  async deleteBoard(id: number): Promise<void> {
    const result = this.delete(id);

    if ((await result).affected === 0) {
      throw new NotFoundException(`${id} 아이디는 없음`);
    }
  }

  async updateBoard(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.save(board);

    return board;
  }
}
