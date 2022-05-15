import {Injectable} from '@nestjs/common'
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsRepository{
    private clientsDatabase: Client[];
    save(client: Client){
        try {
            this.clientsDatabase.push(client);
            return { msg: 'Client successfully created'}
        } catch (error) {
            throw new Error('Error')
        }
    }
}