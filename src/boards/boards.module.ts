import { BoardsService } from "./boards.service";
import { BoardsController } from "./boards.controller";
/*
https://docs.nestjs.com/modules
*/

import { Module } from "@nestjs/common";
import { TypeOrmExModule } from "src/configs/db/typeorm-ex.module";
import { BoardRepository } from "./boards.repository";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [TypeOrmExModule.forCustomRepository([BoardRepository]), AuthModule],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
