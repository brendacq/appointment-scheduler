import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';
import { clientMock } from '../../test/mocks/clients/client.entity.mock';
import { ClientsRepository } from './clients.repository';
import { ClientsService } from './clients.service';
import { Client } from './entities/client.entity';

describe('ClientsService', () => {
  let service: ClientsService;
  let repository: ClientsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientsService, ClientsRepository],
    }).compile();

    service = module.get<ClientsService>(ClientsService);
    repository = module.get<ClientsRepository>(ClientsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('Create new client', () => {
    it('should create a new client', async () => {
      const newClient: Client = clientMock;

      const response = await service.create(newClient);

      const passwordEquals = await bcrypt.compare(newClient.password, response.password);
      
      if(passwordEquals){
        response.password = newClient.password;
      } 
      expect(response).toEqual(clientMock);
    });
  });

});
