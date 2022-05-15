import { Injectable } from '@nestjs/common';
import { v4 as uuidv } from 'uuid'
import { AppointmentsRepository } from './appointments.repository'
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Injectable()
export class AppointmentsService {
    constructor(private readonly appointmentsRepository: AppointmentsRepository){}

    create(appointment: CreateAppointmentDto){
        const newAppointment = {
            id: uuidv(),
            ...appointment,
            createdAt: Date.now().toString(),
            updatedAt: Date.now().toString(),
        }

        try {
            return this.appointmentsRepository.save(newAppointment);
        } catch (error) {
            throw new Error('Error in appointment service');
        }
    }
}
