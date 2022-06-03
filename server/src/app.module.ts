import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [AppointmentsModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
