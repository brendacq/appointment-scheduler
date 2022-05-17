import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid'
import { ClientsRepository } from './clients.repository';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientsService {
  constructor(private readonly clientsRepository: ClientsRepository){}
  async create(client: CreateClientDto) {
    const passwordHash = await bcrypt.hash(client.password, 10);
    console.log('clients service');
    
    const newClient = {
      id: uuid(),
      ...client,
      password: passwordHash,
    }

    try {      
      this.clientsRepository.save(newClient);
      return newClient;
    } catch (error) {
      throw new Error('Error to save client');
    }
  }
}
