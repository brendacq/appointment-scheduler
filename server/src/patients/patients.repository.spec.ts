import { TestingModule,Test } from '@nestjs/testing'
import { patientMock } from '../../test/mocks/patients/patient.entity.mock';
import { PatientsRepository } from './patients.repository'
import { Patient } from './entities/patient.entity';

describe('Clients repository', () => {
    let repository: PatientsRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PatientsRepository],
        }).compile();

        repository = module.get<PatientsRepository>(PatientsRepository);
    })

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });

    describe('save', () => {
        it('should save a new patient', async () => {
            const newPatient: Patient = patientMock;

            const response = await repository.save(newPatient);

            expect(response).toEqual(newPatient);
        });
    })
})