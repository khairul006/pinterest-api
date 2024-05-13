

import { Injectable } from "@nestjs/common";
import { LogService } from "app/core/providers/log/log.service";
// import { MsSQLService } from 'app/core/providers/mssql/mssql.service';
// import { MySQLService } from "app/core/providers/mysql/mysql.service";
import { OracleService } from "app/core/providers/oracle/oracle.service";
// import { PostgresService } from "app/core/providers/postgres/postgres.service";
// import { RedisService } from "app/core/providers/redis/redis.service";

@Injectable()
export class GalleryService {
 
    /**
     * Constructor
     */
        
    constructor (
        // private _msSQLService: MsSQLService,
        // private _mySQLService: MySQLService,
        private _oracleService: OracleService,
        // private _postgresService: PostgresService,
        // private _redisService: RedisService,
        private _logService: LogService
    ){
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    async getTimestamp(request): Promise<any | null> {
        try {

            // -------------------
            // Microsoft SQL
            // -------------------

            // let msSQL;
            // try {
            //     // Get timestamp
            //     const msSQLQuery = "SELECT getdate() AS timestamp";
            //     this._logService.debug("Microsoft SQL Query", msSQLQuery);
            //     const [msSQLResult] = await this._msSQLService.query(msSQLQuery);
            //     this._logService.debug("Microsoft SQL Results", msSQLResult);
            //     // Get MsSQL version
            //     const [msSQLInfo] = await this._msSQLService.query(`SELECT @@VERSION`);
            //     // Compose Result
            //     msSQL = {version: msSQLInfo[""], timestamp: msSQLResult.timestamp};
            // } catch (error) {
            //     msSQL = error.message;
            // }

            // -------------------
            // MySQL
            // -------------------

            // let mySQL;
            // try {
            //     // Get timestamp
            //     const mySQLQuery = "SELECT now() AS timestamp";
            //     this._logService.debug("MySQL Query", mySQLQuery);
            //     const [mySQLResult] = await this._mySQLService.query(mySQLQuery);
            //     this._logService.debug("MySQL Results", mySQLResult);
            //     // Get MySQL version
            //     const mySQLInfo = await this._mySQLService.query(`SHOW variables like "%version%"`);
            //     const mySQLVersion = mySQLInfo.find(item => item['Variable_name'] === 'version');
            //     // Compose Result
            //     mySQL = {version: mySQLVersion.Value, timestamp: mySQLResult.timestamp};
            // } catch (error) {
            //     mySQL = error.message;
            // }

            // -------------------
            // Oracle
            // -------------------

            let oracle;
            try {
                // Get timestamp
                const oracleQuery = "SELECT SYSTIMESTAMP AS TIMESTAMP FROM DUAL";
                this._logService.debug("Oracle Query", oracleQuery);
                const [oracleResult] = await this._oracleService.query(oracleQuery);
                this._logService.debug("Oracle Results", oracleResult);
                // Get Oracle version
                const oracleInfo = await this._oracleService.query(`SELECT * FROM v$version`);
                const oracleVersion = oracleInfo.map(item => item['BANNER']).join(" ");
                // Compose Result
                oracle = {version: oracleVersion, timestamp: oracleResult['TIMESTAMP']};
            } catch (error) {
                oracle = error.message;
            }


            // -------------------
            // Postgress
            // -------------------

            // let postgres;
            // try {
            //     // Get timestamp
            //     const postgresQuery = "SELECT CURRENT_TIMESTAMP AS timestamp";
            //     this._logService.debug("Postgres Query", postgresQuery);
            //     const [postgresResult] = await this._postgresService.query(postgresQuery);
            //     this._logService.debug("Postgres Results", postgresResult);
            //     // Get Postgress version
            //     const [postgresInfo] = await this._postgresService.query(`SELECT version()`);            
            //     const postgresVersion = postgresInfo.version;
            //     // Compose Result
            //     postgres = {version: postgresVersion, timestamp: postgresResult.timestamp};
            // } catch (error) {
            //     postgres = error.message;
            // }

            // -------------------
            // Redis
            // -------------------

            // let redis;
            // try {
            //     // Get timestamp
            //     this._logService.debug("Redis Cached endpoint", request.url);
            //     const redisResult = await this._redisService.getOrSetCache(request.url, () => {
            //         return {
            //             message: "Next response will be cached for 10 second!!",
            //             timestamp: new Date()
            //         }
            //     });
            //     // Get Redis version
            //     const redisInfo = await this._redisService.getInfo();
            //     // Compose Result
            //     redis = {version: redisInfo['redis_version'], result: redisResult};
            //     this._logService.debug("Redis Results", redis);
            // } catch (error) {
            //     redis = error.message;
            // }

            return {
                // msSQL,
                // mySQL,
                oracle
                // postgres,
                // redis
            }

        } catch (error) {
            throw new Error(error);
        }
    }
}
