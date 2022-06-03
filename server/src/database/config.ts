import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const dynamoClient = new DynamoDBClient({
    region: process.env.AWS_REGION,
    endpoint: process.env.AWS_LOCALHOST,
});

const client = DynamoDBDocumentClient.from(dynamoClient);

export default client;