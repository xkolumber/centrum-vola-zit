import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { S3Client } from "@aws-sdk/client-s3";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: "eu-north-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!,
  },
});
export const docClient = DynamoDBDocumentClient.from(client);

export const clientS3 = new S3Client({
  region: "eu-north-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!,
  },
});
