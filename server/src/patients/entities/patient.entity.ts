import { ApiProperty } from "@nestjs/swagger";

export class Patient {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    documentNumber: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    password: string;
}