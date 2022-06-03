import { Patient } from "src/patients/entities/patient.entity";
import { Doctor } from "src/doctors/entities/doctor.entity";

export class Appointment {
    id: string; 

    patient: Patient;

    doctor: Doctor;

    appointmentDate: Date;

    createdAt: string;

    updatedAt: string;
}