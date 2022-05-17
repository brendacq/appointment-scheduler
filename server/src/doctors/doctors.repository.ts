import { Injectable } from '@nestjs/common';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorsRepository{
    private doctorsDatabase: Doctor[] = [];

    save(doctor: Doctor){
        try {
            return this.doctorsDatabase.push(doctor);
        } catch (error) {
            throw new Error('Error in doctors\' repository');
        }
    }
}