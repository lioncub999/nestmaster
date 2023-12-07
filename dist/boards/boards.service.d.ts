import { Board, BoardStatus } from "./boards.model";
import { BoardRepository } from "./boards.repository";
import { CreateBoardDto } from "./dto/create-boards.dto";
import { User } from "src/auth/user.entity";
export declare class BoardsService {
    private boardRepository;
    constructor(boardRepository: BoardRepository);
    getAllBoards(user: User): Promise<Board[]>;
    getBoardById(id: number, user: User): Promise<Board>;
    createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>;
    deleteBoard(id: number, user: User): Promise<void>;
    updateBoard(id: number, status: BoardStatus, user: User): Promise<Board>;
}
