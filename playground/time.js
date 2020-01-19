const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

console.log(moment().valueOf());
console.log(new Date())

var createdAt = 566356272;
var date = moment(createdAt);
// date.add(1, 'month').subtract('100', 'year');
// console.log(date.format('MMM Do, YYYY'));

console.log(date.format('h:mm a'));