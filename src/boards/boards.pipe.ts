/*
https://docs.nestjs.com/pipes
*/

import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = ['PRIVATE', 'PUBLIC'];
  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} 는 제대로 된 값이 아님`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
