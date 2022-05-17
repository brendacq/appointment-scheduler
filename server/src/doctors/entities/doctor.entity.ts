import { Appointment } from "../../appointments/entities/appointment.entity";

export class Doctor {
    id: string;

    name: string;

    medicalSpecialty: string;

    scheduledAppointments: Appointment[];
}
