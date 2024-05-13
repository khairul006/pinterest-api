import { Controller, Get, HttpStatus, Request } from '@nestjs/common';
import { GalleryService } from 'app/core/services/gallery/gallery.service';
import { CustomHttpResponse } from 'app/shared/custom/http-response/http-response.service';

@Controller()
export class GalleryController {

    constructor(
        private _galleryService: GalleryService
    ){
    }
    
    @Get()
    async getHello(@Request() request) {

        const data = await this._galleryService.getTimestamp(request);
        const response = new CustomHttpResponse({
            code: 'OK',
            message: 'API call successfull',
            statusCode: HttpStatus.OK,
            data
        });
        request.res.statusCode = response.statusCode;
        return response;

    }
}