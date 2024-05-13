import { Module } from '@nestjs/common';
import { GalleryController } from 'app/modules/gallery/gallery.controller';
import { GalleryServiceModule } from 'app/core/services/gallery/gallery.module';

@Module({
    imports: [GalleryServiceModule],
    controllers: [GalleryController],
})
export class GalleryModule {}