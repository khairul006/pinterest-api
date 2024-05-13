import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { appRoutes } from 'app.routes';
import { throttlerConfig } from 'app/config/throttler.config';
import { GalleryModule } from 'app/modules/gallery/gallery.module';
import { HelloModule } from 'app/modules/hello/hello.module';

@Module({
    imports: [
        // Config modules
        ConfigModule.forRoot({expandVariables: true}),
        ThrottlerModule.forRoot({ throttlers: throttlerConfig}),
        // Custom modules
        HelloModule,
        GalleryModule,
        // Router modules0
        RouterModule.register(appRoutes)
    ],
})
export class AppModule {}