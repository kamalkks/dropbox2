'use strict';

const accountSid = 'AC96d74806b4969ea604a3f4f66f13dfcf';
const authToken = 'f94266b548590b3a50aa80ea41c6d49f';
const client = require('twilio')(accountSid, authToken);

module.exports.hello = {

  client.messages.create(
  {
    to: '+17783872926',
    from: '+16042105791',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?'
  },
  (err, message) => {
    console.log(message.sid);
  });

};

