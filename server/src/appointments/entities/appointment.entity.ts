import { Patient } from "../../patients/entities/patient.entity";
import { Doctor } from "../../doctors/entities/doctor.entity";
import { ApiProperty } from "@nestjs/swagger";

export class Appointment {
    @ApiProperty()
    id: string; 

    @ApiProperty()
    patient: Patient;

    @ApiProperty()
    doctor: Doctor;

    @ApiProperty()
    appointmentDate: Date;

    @ApiProperty()
    value: number;

    @ApiProperty()
    paymentMethod: string;

    @ApiProperty()
    status: string;

    @ApiProperty()
    createdAt: string;

    @ApiProperty()
    updatedAt: string;
}

export class Appointments {
    appointments: Appointment[];
}