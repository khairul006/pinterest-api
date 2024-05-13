import { HttpStatus, Injectable } from '@nestjs/common';
import { ISO8601DateTime } from 'app/core/utils/date.util';
import { CustomHttpResponseType, Pagination } from 'app/shared/custom/http-response/http-response.dto';
 
/**
* TODO: Do documentation
*/
@Injectable()
export class CustomHttpResponse<T> {
    private readonly message: string;
    readonly statusCode: HttpStatus;
    private readonly timestamp: string;
    private readonly module: string;
    private readonly code: string;
    private readonly additionalMessage: any;
    private readonly error: string;
    private readonly data: T;
    private readonly pagination: Pagination;
 
    constructor(
        { message, statusCode, module, code, additionalMessage, error, data, pagination } : CustomHttpResponseType,
    ) {
 
        this.message = message;
        this.timestamp = ISO8601DateTime(new Date());
        this.statusCode = statusCode;
        this.module = module;
        this.code = code;
        this.additionalMessage = additionalMessage;
        this.error = error;
        this.data = data;
        this.pagination = pagination;
    }
}