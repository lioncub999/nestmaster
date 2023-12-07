import { Repository } from "typeorm";
import { Board } from "./boards.entity";
import { CreateBoardDto } from "./dto/create-boards.dto";
import { BoardStatus } from "./boards.model";
import { User } from "src/auth/user.entity";
export declare class BoardRepository extends Repository<Board> {
    getBoardById(id: number, user: User): Promise<Board>;
    getAllBoards(user: User): Promise<Board[]>;
    createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>;
    deleteBoard(id: number, user: User): Promise<void>;
    updateBoard(id: number, status: BoardStatus, user: User): Promise<Board>;
}
