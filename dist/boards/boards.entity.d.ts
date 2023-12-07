import { BaseEntity } from "typeorm";
import { BoardStatus } from "./boards.model";
import { User } from "src/auth/user.entity";
export declare class Board extends BaseEntity {
    id: number;
    title: string;
    description: string;
    status: BoardStatus;
    user: User;
    userId: number;
}
