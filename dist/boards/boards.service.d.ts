import { Board, BoardStatus } from './boards.model';
import { BoardRepository } from './boards.repository';
import { CreateBoardDto } from './dto/create-boards.dto';
export declare class BoardsService {
    private boardRepository;
    constructor(boardRepository: BoardRepository);
    getAllBoards(): Promise<Board[]>;
    getBoardById(id: number): Promise<Board>;
    createBoard(createBoardDto: CreateBoardDto): Promise<Board>;
    deleteBoard(id: number): Promise<void>;
    updateBoard(id: number, status: BoardStatus): Promise<Board>;
}
