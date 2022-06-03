import { CreateTableInput, CreateTableCommand } from '@aws-sdk/client-dynamodb'
import { TABLE_NAMES } from '../shared/constants'
import client from './config'

// Criar tabela de clients
() => {
    const clientsTableParams: CreateTableInput = {
        TableName: TABLE_NAMES.Clients,
        KeySchema: [
            { AttributeName: 'id', KeyType: 'HASH' }
        ],
        AttributeDefinitions: [
            {AttributeName: 'id', AttributeType: 'S'},
        ], 
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 10,
        }
    }

    const command = new CreateTableCommand(clientsTableParams);
    client.send(command)
    .then(response => {
        return response;
    })
    .catch(err => {
        throw Error(`Error in create tables: ${err}`);
    });
}