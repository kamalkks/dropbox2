'use strict'
const uuid = require('uuid')
const aws= require('aws-sdk');
const dynamo = new aws.DynamoDB.DocumentClient();
const accountSid = 'AC96d74806b4969ea604a3f4f66f13dfcf';
const authToken = 'f94266b548590b3a50aa80ea41c6d49f';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);
// const vancouver = require('./flyt/handler.js');

module.exports.gold = (event) => {

  event.Records.forEach((record) => {
    const filename = record.s3.object.key;
    const date1 = record.eventTime;
    const uploadDate = new Date(date1).toString();

        const pearls = {
		TableName: 'emlyn1',
		Item: {
			id: uuid.v1(),
			name:filename,
			activity:'File added',
			date:uploadDate
		
		}
	}
		dynamo.put(pearls, (error,result) =>{
		if(error)
		{
			console.error(error);
			return;
		}
	
	})
			client.messages.create(
  {
    to: '+17783872926',
    from: '+16042105791',
    body: `${record.s3.object.key} is added to S3 bucket`
  },
  (err, message) => {
    console.log(message.sid);
  });
		
		// vancouver();



  });

};
module.exports.platinum = (event) => {
	client.messages.create(
  {
    to: '+17783872926',
    from: '+16042105791',
    body: filename
  },
  (err, message) => {
    console.log(message.sid);
  });
};
module.exports.silver= (event) => {

  event.Records.forEach((record) => {
    const filename = record.s3.object.key;
    const date2 = record.eventTime;
    const deleteTime = new Date(date2).toString();

        const pearls = {
		TableName: 'emlyn1',
		Item: {
			id: uuid.v1(),
			name:filename,
			activity:'File deleted',
			date:deleteTime
		
		}
	}
		dynamo.put(pearls, (error,result) =>{
		if(error)
		{
			console.error(error);
			return;
		}

	
	})
					client.messages.create(
  {
    to: '+17783872926',
    from: '+16042105791',
    body: `${record.s3.object.key} is deleted from S3 bucket`
  },
  (err, message) => {
    console.log(message.sid);
  });
  });

};