import { ApiProperty } from "@nestjs/swagger";
import { Address } from "../entities/patient.entity";

export class CreatePatientDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    documentNumber: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    address: Address;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    email: string;
}