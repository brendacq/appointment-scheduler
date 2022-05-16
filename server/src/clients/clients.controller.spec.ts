import { Test, TestingModule } from '@nestjs/testing';
import { clientDtoMock } from '../../test/mocks/clients/client-dto.mock';
import { clientMock } from '../../test/mocks/clients/client.entity.mock';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';

describe('ClientsController', () => {
  let controller: ClientsController;
  let service: ClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsController],
      providers: [{
        provide: ClientsService,
        useValue: {
          create: jest.fn().mockResolvedValue(clientMock)
        }
      }],
    }).compile();

    controller = module.get<ClientsController>(ClientsController);
    service = module.get<ClientsService>(ClientsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('should create a new client', () => {
    it('should return client', async () => {
      const response = await controller.create(clientDtoMock);
      expect(response).toEqual(clientMock);
    })
  })
});
