import { ApiProperty } from "@nestjs/swagger";
import { Appointment } from "../../appointments/entities/appointment.entity";

export class Patient {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    age: number;
    
    @ApiProperty()
    documentNumber: string;
    
    @ApiProperty()
    address: Address;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    appointments: Appointment[];
}

export class Address {
    @ApiProperty()
    addressLine: string;
  
    @ApiProperty()
    buildingNumber: string;
  
    @ApiProperty()
    complement: string;
  
    @ApiProperty()
    neighborhood: string;
}