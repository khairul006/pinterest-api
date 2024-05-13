import { Routes } from "@nestjs/core";
// import { DatabaseModule } from "app/modules/database/database.module";
import { HelloModule } from "app/modules/hello/hello.module";

export const appRoutes: Routes = [
    {
        path: 'api',
        children: [
            { path: 'hello', module: HelloModule },
            // { path: 'database', module: DatabaseModule },
        ]
    }
]