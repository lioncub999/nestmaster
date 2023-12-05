import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/create-boards.dto';
export declare class BoardsController {
    private boardService;
    constructor(boardService: BoardsService);
    getAllBoards(): Promise<Board[]>;
    getBoardById(id: number): Promise<Board>;
    createBoard(createBoardDto: CreateBoardDto): Promise<Board>;
    deleteBoard(id: number): Promise<void>;
    updateBoard(id: number, status: BoardStatus): Promise<Board>;
}
