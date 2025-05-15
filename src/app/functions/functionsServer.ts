"use server";

import {
  DeleteCommand,
  GetCommand,
  PutCommand,
  ScanCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";
import { clientS3, docClient } from "../lib/awsConfig";
import { GalleryInterface } from "../lib/interface";
import { aws_bucket_name, createSlug } from "./functionsNeutral";

import { createPresignedPost } from "@aws-sdk/s3-presigned-post";

export async function fetchGalleries(): Promise<GalleryInterface[]> {
  try {
    const command = new ScanCommand({
      TableName: "galeria",
    });

    const response = await docClient.send(command);
    if (response.Items) {
      return response.Items as GalleryInterface[];
    }

    throw new Error(`Item with  not found.`);
  } catch (err) {
    console.log(err);
    throw new Error(`Item with  not found.`);
  }
}

export async function AdminDeleteAlbum(id: string) {
  try {
    const command = new DeleteCommand({
      TableName: "galeria",
      Key: {
        id,
      },
    });

    const response = await docClient.send(command);

    return response.$metadata.httpStatusCode;
  } catch (error) {
    console.error("Database Error: Failed", error);
    return "false";
  }
}

export async function uploadFileToS3(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) throw new Error("No file provided");

    const folderName = new Date().toISOString();

    const originalFileName = file.name.split(".")[0];
    const fileExtension = file.name.split(".").pop();

    const safeFileName = `${createSlug(originalFileName)}.${fileExtension}`;

    const { url, fields } = await createPresignedPost(clientS3, {
      Bucket: aws_bucket_name,
      Key: `${folderName}/${safeFileName}`,
      Expires: 3600,
    });

    const formDataS3 = new FormData();
    Object.entries(fields).forEach(([key, value]) => {
      formDataS3.append(key, value);
    });
    formDataS3.append("file", file);

    const uploadResponse = await fetch(url, {
      method: "POST",
      body: formDataS3,
    });

    if (uploadResponse.status !== 204) {
      throw new Error("Failed to upload file");
    }

    const fileKey = `${folderName}/${safeFileName}`;
    const s3Url = `https://${aws_bucket_name}.s3.eu-north-1.amazonaws.com/${fileKey}`;

    return s3Url;
  } catch (err) {
    console.error("S3 Upload Error:", err);
    throw new Error("S3 upload failed");
  }
}

export async function AdminAddPhotoGallery(actualizeGallery: GalleryInterface) {
  const uuid = crypto.randomUUID();

  try {
    const response = await docClient.send(
      new PutCommand({
        TableName: "galeria",
        Item: {
          id: uuid,
          fotky: actualizeGallery.fotky,
          nazov: actualizeGallery.nazov,
          datum_pridania: new Date().toISOString(),
          partition_key: "all",
        },
      })
    );

    return response.$metadata.httpStatusCode;
  } catch (error) {
    console.error("DynamoDB Add Error:", error);
    return "false";
  }
}

export async function fetchGalleryId(id: string): Promise<GalleryInterface> {
  try {
    const command = new GetCommand({
      TableName: "galeria",
      Key: {
        id: id,
      },
    });

    const response = await docClient.send(command);
    if (!response.Item) {
      throw new Error(`Item with id not found.`);
    }

    return response.Item as GalleryInterface;
  } catch (err) {
    console.log(err);
    throw new Error(`Item with  not found.`);
  }
}

export async function AdminActualizeAlbumGallery(
  actualizeData: GalleryInterface
) {
  try {
    const getCommand = new GetCommand({
      TableName: "galeria",
      Key: {
        id: actualizeData.id,
      },
    });

    const data = await docClient.send(getCommand);

    if (!data.Item) {
      throw new Error(`Item with id ${actualizeData.id} not found`);
    }

    const updateExpression = Object.keys(actualizeData)
      .filter((key) => key !== "id")
      .map((key) => `#${key} = :${key}`)
      .join(", ");

    const ExpressionAttributeNames = Object.keys(actualizeData)
      .filter((key) => key !== "id")
      .reduce((acc, key) => {
        acc[`#${key}`] = key;
        return acc;
      }, {} as Record<string, string>);

    const ExpressionAttributeValues = Object.entries(actualizeData)
      .filter(([key]) => key !== "id")
      .reduce((acc, [key, value]) => {
        acc[`:${key}`] = value;
        return acc;
      }, {} as Record<string, any>);

    const updateCommand = new UpdateCommand({
      TableName: "galeria",
      Key: { id: actualizeData.id },
      UpdateExpression: `SET ${updateExpression}`,
      ExpressionAttributeNames,
      ExpressionAttributeValues,
      ReturnValues: "ALL_NEW",
    });

    const response = await docClient.send(updateCommand);
    return response.$metadata.httpStatusCode;
  } catch (error) {
    console.error("DynamoDB Update Error:", error);
    return "false";
  }
}
