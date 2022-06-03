import { HttpException, Inject, Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { TABLE_NAMES } from '../shared/constants';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorsRepository {
  constructor(@Inject('DYNAMO') private db: DynamoDB.DocumentClient) {}

  async save(doctor: Doctor) {
    try {
      const response = await this.db
        .put({
          TableName: TABLE_NAMES.Doctors,
          Item: doctor,
        })
        .promise();

      return response;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
}
