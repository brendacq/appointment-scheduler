import { Injectable, Inject, HttpException } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { TABLE_NAMES } from '../shared/constants';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientsRepository {
  constructor(@Inject('DYNAMO') private db: DynamoDB.DocumentClient) {}

  public async save(patient: Patient) {
    try {
      const response = await this.db
        .put({
          TableName: TABLE_NAMES.Patients,
          Item: patient,
        })
        .promise();

      return response;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
}
