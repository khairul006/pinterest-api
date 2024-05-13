import { Module } from "@nestjs/common";
import { LogServiceModule } from "app/core/providers/log/log.module";
// import { MsSQLServiceModule } from "app/core/providers/mssql/mssql.module";
// import { MySQLServiceModule } from "app/core/providers/mysql/mysql.module";
import { OracleServiceModule } from "app/core/providers/oracle/oracle.module";
// import { PostgresServiceModule } from "app/core/providers/postgres/postgres.module";
// import { RedisServiceModule } from "app/core/providers/redis/redis.module";
import { GalleryService } from "app/core/services/gallery/gallery.service";

@Module({
    imports: [
        // MsSQLServiceModule,
        // MySQLServiceModule,
        OracleServiceModule,
        // PostgresServiceModule,
        // RedisServiceModule,
        LogServiceModule
    ],
    providers: [GalleryService], 
    exports: [GalleryService]
})
export class GalleryServiceModule{}