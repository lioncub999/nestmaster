import { createParamDecorator, ExecutionContext, Logger } from "@nestjs/common";
import { User } from "./user.entity";

export const GetUser = createParamDecorator(
  (date, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    Logger.verbose(`userInfo : ${JSON.stringify(req.user)}`);
    return req.user;
  }
);
