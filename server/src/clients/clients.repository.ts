import {Injectable} from '@nestjs/common'
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsRepository{
    private clientsDatabase: Client[] = [];
    save(client: Client){
        try {
            this.clientsDatabase.push(client);
            
            return client;
        } catch (error) {
            throw new Error('Error in clients repo')
        }
    }
}