import { Module } from '@nestjs/common';
import { OracleService } from 'app/core/providers/oracle/oracle.service';

@Module({
  exports: [OracleService],
  providers: [
    OracleService
  ]
})
export class OracleServiceModule {}