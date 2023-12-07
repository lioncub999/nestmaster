/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { BoardsService } from "./boards.service";
import { Board, BoardStatus } from "./boards.model";
import { CreateBoardDto } from "./dto/create-boards.dto";
import { BoardStatusValidationPipe } from "./boards.pipe";
import { AuthGuard } from "@nestjs/passport";
import { User } from "src/auth/user.entity";
import { GetUser } from "src/auth/get-user.decorator";

@Controller("boards")
@UseGuards(AuthGuard())
export class BoardsController {
  private logger = new Logger("BoardsController");

  constructor(private boardService: BoardsService) {}

  @Get()
  getAllBoards(@GetUser() user: User): Promise<Board[]> {
    this.logger.verbose(`User ${user.username} trying to get all boards`);
    return this.boardService.getAllBoards(user);
  }

  @Get("/:id")
  getBoardById(@Param("id") id: number, @GetUser() user: User): Promise<Board> {
    return this.boardService.getBoardById(id, user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(
    @Body() createBoardDto: CreateBoardDto,
    @GetUser() user: User
  ): Promise<Board> {
    return this.boardService.createBoard(createBoardDto, user);
  }

  @Delete("/:id")
  deleteBoard(@Param("id") id: number, @GetUser() user: User): Promise<void> {
    return this.boardService.deleteBoard(id, user);
  }

  @Patch("/:id")
  updateBoard(
    @Param("id", ParseIntPipe) id: number,
    @Body("status", BoardStatusValidationPipe) status: BoardStatus,
    @GetUser() user: User
  ) {
    return this.boardService.updateBoard(id, status, user);
  }
}
