import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/configs/db/typeorm-ex.module';
import { BoardRepository } from './boards.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([BoardRepository])],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
