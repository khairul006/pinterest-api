/**
 * 
 * Please update this so that we can track the latest version.
 * 
 * Author           : Ahmad Miqdaad (ahmadmiqdaadz[at]gmail.com)
 * Last Contributor : Ahmad Miqdaad (ahmadmiqdaadz[at]gmail.com)
 * Last Updated     : 1 May 2024
 * 
 * **/

import { Injectable, Logger } from '@nestjs/common';
import { oracleConfig } from 'app/config/oracle.config';
import * as oracledb from 'oracledb';

@Injectable()
export class OracleService {

    private config: oracledb.PoolAttributes;
    private readonly logger = new Logger(OracleService.name);
    
    /**
     * Constructor
     */

    constructor(){
        this.initialiseDb();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    async query(queryString: string, binds: any = {}) {
        
        let connection;
        try {
            connection = await oracledb.getConnection(this.config);

            const result = await connection.execute(queryString, binds, { autoCommit: true });
            const metaData = result.metaData;
            const rows = result.rows;

            /**
             * TODO: Instead of using loop to create an object, 
             * it is better to find a better way to transform the rows from db
             * and return it to rest api
             */
            const resultArray = rows.map((row) => {
                const obj = {};
                for (let i = 0; i < metaData.length; i++) {
                    obj[metaData[i].name] = row[i];
                }
                return obj;
            });
            return resultArray;
        } catch (error) { 
            this.logger.error(`Failed to get Oracle Connection: ${error}`);
            throw new Error(error);
        } finally {            
            if (connection) {
                try {
                    await connection.close();
                } catch (error) {
                    this.logger.error(`Failed to close Oracle Connection: ${error}`);
                }
            }
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    private async initialiseDb() {
        try {
            this.config = oracleConfig();
            await oracledb.initOracleClient(this.config);
            this.logger.debug(`Oracle Database successfully initialized`);
        } catch (error) {
            this.logger.error(`Failed to initialize Oracle Client: ${error}`);
        }
    }
}