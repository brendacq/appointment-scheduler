import { DynamoDB } from 'aws-sdk';

export default () => {
  return new DynamoDB.DocumentClient({
    region: process.env.AWS_REGION,
    endpoint: process.env.AWS_ENDPOINT,
  });
};
