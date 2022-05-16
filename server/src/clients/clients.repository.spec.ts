import { TestingModule,Test } from '@nestjs/testing'
import { ClientsRepository } from './clients.repository'
import { Client } from './entities/client.entity';

describe('Clients repository', () => {
    let repository: ClientsRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ClientsRepository],
        }).compile();

        repository = module.get<ClientsRepository>(ClientsRepository);
    })

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });

    describe('save', () => {
        it('should save a new client', async () => {
            const newClient: Client = {
                age: 30,
                documentNumber: '1111',
                id: '',
                name: '',
                password: ''
            }

            const response = await repository.save(newClient);

            expect(response).toEqual(newClient);
        });
    })
})