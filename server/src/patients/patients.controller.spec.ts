import { Test, TestingModule } from '@nestjs/testing';
import { patientDtoMock } from '../../test/mocks/patients/patient-dto.mock';
import { patientMock } from '../../test/mocks/patients/patient.entity.mock';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';

describe('PatientsController', () => {
  let controller: PatientsController;
  let service: PatientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientsController],
      providers: [{
        provide: PatientsService,
        useValue: {
          create: jest.fn().mockResolvedValue(patientMock)
        }
      }],
    }).compile();

    controller = module.get<PatientsController>(PatientsController);
    service = module.get<PatientsService>(PatientsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('should create a new client', () => {
    it('should return patient', async () => {
      const response = await controller.create(patientDtoMock);
      expect(response).toEqual(patientMock);
    })
  })
});
