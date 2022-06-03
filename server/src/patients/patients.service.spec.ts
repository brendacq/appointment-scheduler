import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';
import { patientMock } from '../../test/mocks/patients/patient.entity.mock';
import { PatientsRepository } from './patients.repository';
import { PatientsService } from './patients.service';
import { Patient } from './entities/patient.entity';

describe('PatientsService', () => {
  let service: PatientsService;
  let repository: PatientsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientsService, PatientsRepository],
    }).compile();

    service = module.get<PatientsService>(PatientsService);
    repository = module.get<PatientsRepository>(PatientsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('Create new client', () => {
    it('should create a new client', async () => {
      const newPatient: Patient = patientMock;

      const response = await service.create(newPatient);

      // const passwordEquals = await bcrypt.compare(newPatient.password, response.password);
      
      // if(passwordEquals){
      //   response.password = newPatient.password;
      // } 
      expect(response).toEqual(patientMock);
    });
  });

});
