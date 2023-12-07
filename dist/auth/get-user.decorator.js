"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
const common_1 = require("@nestjs/common");
exports.GetUser = (0, common_1.createParamDecorator)((date, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    common_1.Logger.verbose(`userInfo : ${JSON.stringify(req.user)}`);
    return req.user;
});
//# sourceMappingURL=get-user.decorator.js.map