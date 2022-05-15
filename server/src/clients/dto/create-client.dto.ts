import { ApiProperty } from "@nestjs/swagger";

export class CreateClientDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    documentNumber: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    password: string;
}