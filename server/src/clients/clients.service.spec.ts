import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';
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
  });

  describe('Create new client', () => {
    it('should create a new client', async () => {
      const newClient: Client = {
        id: '000-abf31-432124',
        age: 30,
        documentNumber: '33311122208',
        name: 'New Client',
        password: 'password',
      };

      const response = await service.create(newClient);

      const passwordEquals = await bcrypt.compare(newClient.password, response.password);

      if(passwordEquals){
        response.password = newClient.password;
      } 

      expect(response).toEqual(newClient);
    });

    it('should throw an error if client not saved', async () => {
      const newClient: Client = {
        id: '000-abf31-432124',
        age: 30,
        documentNumber: '33311122208',
        name: 'New Client',
        password: 'password',
      };
  
      jest.spyOn(service, 'create').mockRejectedValue(() => new Error('Error'));
      
      const response = await service.create(newClient);
  
      expect(response).rejects.toThrowError();
    })
  });

});
