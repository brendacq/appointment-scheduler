import { CreatePatientDto } from "src/patients/dto/create-patient.dto";

export const patientDtoMock: CreatePatientDto = {
    name: 'patient name',
    age: 30,
    documentNumber: '11122233344',
    password: 'password'
}