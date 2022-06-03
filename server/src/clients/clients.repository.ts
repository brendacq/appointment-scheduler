import { Injectable, Inject, HttpException } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { TABLE_NAMES } from '../shared/constants';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsRepository {
  constructor(@Inject('DYNAMO') private db: DynamoDB.DocumentClient) {}

  async save(client: Client) {
    try {
      const response = await this.db
        .put({
          TableName: TABLE_NAMES.Clients,
          Item: client,
        })
        .promise();

      return response;
    } catch (error) {
      throw new HttpException(error.response.data, 500);
    }
  }
}
