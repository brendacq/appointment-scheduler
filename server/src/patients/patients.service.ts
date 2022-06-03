import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { PatientsRepository } from './patients.repository';
import { CreatePatientDto } from './dto/create-patient.dto';

@Injectable()
export class PatientsService {
  constructor(private readonly patientsRepository: PatientsRepository){}
  
  async create(patient: CreatePatientDto) {
    const newPatient = {
      id: uuid(),
      ...patient,
      appointments: []
    }

    try {      
      const response = await this.patientsRepository.save(newPatient);
      return response;
    } catch (error) {
      throw new Error('Error to save client');
    }
  }
}