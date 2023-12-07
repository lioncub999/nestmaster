"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardRepository = void 0;
const typeorm_ex_decorator_1 = require("../configs/db/typeorm-ex.decorator");
const typeorm_1 = require("typeorm");
const boards_entity_1 = require("./boards.entity");
const boards_model_1 = require("./boards.model");
const common_1 = require("@nestjs/common");
let BoardRepository = class BoardRepository extends typeorm_1.Repository {
    async getBoardById(id, user) {
        const found = await this.findOne({ where: { id, userId: user.id } });
        if (!found) {
            throw new common_1.NotFoundException();
        }
        return found;
    }
    async getAllBoards(user) {
        const query = this.createQueryBuilder("board");
        query.where("board.userId = :userId", { userId: user.id });
        const boards = await query.getMany();
        return boards;
    }
    async createBoard(createBoardDto, user) {
        const { title, description } = createBoardDto;
        const board = new boards_entity_1.Board();
        board.title = title;
        board.description = description;
        board.status = boards_model_1.BoardStatus.PUBLIC;
        board.user = user;
        await board.save();
        return board;
    }
    async deleteBoard(id, user) {
        const result = await this.delete({ id, userId: user.id });
        if ((await result).affected === 0) {
            throw new common_1.NotFoundException(`${id} 아이디는 없음`);
        }
    }
    async updateBoard(id, status, user) {
        const board = await this.getBoardById(id, user);
        board.status = status;
        await board.save();
        return board;
    }
};
exports.BoardRepository = BoardRepository;
exports.BoardRepository = BoardRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(boards_entity_1.Board)
], BoardRepository);
//# sourceMappingURL=boards.repository.js.map