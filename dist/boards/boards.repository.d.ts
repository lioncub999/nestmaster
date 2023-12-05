import { Repository } from 'typeorm';
import { Board } from './boards.entity';
import { CreateBoardDto } from './dto/create-boards.dto';
import { BoardStatus } from './boards.model';
export declare class BoardRepository extends Repository<Board> {
    getBoardById(id: number): Promise<Board>;
    getAllBoards(): Promise<Board[]>;
    createBoard(createBoardDto: CreateBoardDto): Promise<Board>;
    deleteBoard(id: number): Promise<void>;
    updateBoard(id: number, status: BoardStatus): Promise<Board>;
}
