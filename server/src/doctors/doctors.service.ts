import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { DoctorsRepository } from './doctors.repository';
import { CreateDoctorDto } from './dto/create-doctor.dto';

@Injectable()
export class DoctorsService {
  constructor(private readonly doctorsRepository: DoctorsRepository) {}

  create(doctor: CreateDoctorDto) {
    const createDoctor = {
      id: uuid(),
      ...doctor,
      scheduledAppointments: []
    };

    try {
      return this.doctorsRepository.save(createDoctor);
    } catch (error) {
      throw new Error('Error in doctors\' repository');
    }
  }
}
