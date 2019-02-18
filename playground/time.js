// JAN 1st 1970 00:00:00 am is unix epic of a timestamp stored in UTC(timezone independent)

var moment = require('moment');

var date = moment();
console.log(date.format('MMM Do, YYYY'));
