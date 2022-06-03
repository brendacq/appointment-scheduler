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
    
    const newClient = {
      id: uuid(),
      ...client,
      password: passwordHash,
    }

    try {      
      const response = await this.clientsRepository.save(newClient);
      return response;
    } catch (error) {
      throw new Error('Error to save client');
    }
  }
}