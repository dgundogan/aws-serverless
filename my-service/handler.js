'use strict';

module.exports.hello = async (event, context) => {
  let remainingTime = context.getRemainingTimeInMillis();
  let functionName = context.functionName;
  let AWSrequestId = context.awsRequestId;

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      ev: event,
      rt: remainingTime
    })
  }

  return response;
};
