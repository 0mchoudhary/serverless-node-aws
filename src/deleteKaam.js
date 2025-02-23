"use strict";
const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const deleteKaam = async (event) => {
  console.log("Deleting item:", event.pathParameters.id);

  try {
    await dynamoDb.delete({
      TableName: "KaamKaro",
      Key: { id: event.pathParameters.id },
    }).promise();

    return { statusCode: 200, body: JSON.stringify({ msg: "Kaam Delete Kar Diya" }) };
  } catch (error) {
    console.error("Delete Error:", error);
    return { statusCode: 500, body: JSON.stringify({ msg: "Error deleting kaam", error: error.message }) };
  }
};

// ✅ Ensure the function is properly exported
module.exports.handler = deleteKaam;

