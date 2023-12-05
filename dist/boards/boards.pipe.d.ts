import { PipeTransform } from '@nestjs/common';
export declare class BoardStatusValidationPipe implements PipeTransform {
    readonly StatusOptions: string[];
    transform(value: any): any;
    private isStatusValid;
}
