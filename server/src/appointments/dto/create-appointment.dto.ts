import { ApiProperty } from "@nestjs/swagger";
export class CreateAppointmentDto {
    @ApiProperty()
    patient: string;

    @ApiProperty()
    doctor: string;

    @ApiProperty()
    appointmentDate: Date;
}