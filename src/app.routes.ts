import { Routes } from "@nestjs/core";
import { GalleryModule } from "app/modules/gallery/gallery.module";
import { HelloModule } from "app/modules/hello/hello.module";

export const appRoutes: Routes = [
    {
        path: 'api',
        children: [
            { path: 'hello', module: HelloModule },
            { path: 'gallery', module: GalleryModule },
        ]
    }
]