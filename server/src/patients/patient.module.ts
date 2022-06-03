import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './clients.controller';
import { PatientsRepository } from './patients.repository';

@Module({
  controllers: [PatientsController],
  providers: [PatientsService, PatientsRepository]
})
export class PatientsModule {}