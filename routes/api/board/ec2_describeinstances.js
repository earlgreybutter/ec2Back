// Import required AWS SDK clients and commands for Node.js
const { EC2Client } = require("@aws-sdk/client-ec2");
const { DescribeInstancesCommand } = require("@aws-sdk/client-ec2");
// Set the AWS Region.
const REGION = "ap-northeast-1"; //e.g. "us-east-1"
// Create anAmazon EC2 service client object.
const ec2Client = new EC2Client({ region: REGION });

async function run() {
  try {
    const data = await ec2Client.send(new DescribeInstancesCommand({}));
    var resultData = JSON.stringify(data);
    return resultData;
  } catch (err) {
    console.log("Error", err);
  }
}

const resultData = run();
module.exports = resultData;
