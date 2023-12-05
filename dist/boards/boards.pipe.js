"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
let BoardStatusValidationPipe = class BoardStatusValidationPipe {
    constructor() {
        this.StatusOptions = ['PRIVATE', 'PUBLIC'];
    }
    transform(value) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`${value} 는 제대로 된 값이 아님`);
        }
        return value;
    }
    isStatusValid(status) {
        const index = this.StatusOptions.indexOf(status);
        return index !== -1;
    }
};
exports.BoardStatusValidationPipe = BoardStatusValidationPipe;
exports.BoardStatusValidationPipe = BoardStatusValidationPipe = __decorate([
    (0, common_1.Injectable)()
], BoardStatusValidationPipe);
//# sourceMappingURL=boards.pipe.js.map