import { Appointment } from "src/appointments/entities/appointment.entity";

export class Doctor {
    id: string;

    name: string;

    medicalSpecialty: string;

    appointmentsScheduled: Appointment[];
}
