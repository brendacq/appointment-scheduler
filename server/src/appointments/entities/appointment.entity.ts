import { Client } from "src/clients/entities/client.entity";
import { Doctor } from "src/doctors/entities/doctor.entity";

export class Appointment {
    id: string; 

    patient: Client;

    doctor: Doctor;

    appointmentDate: Date;

    createdAt: string;

    updatedAt: string;
}