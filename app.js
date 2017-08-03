console.log('Starting app.js');

const fs  = require('fs');
const os  = require('os');
const notes = require('./notes');

//var res = notes.addNote();
var res = notes.add(9,-2);
console.log('result '+res);

var user = os.userInfo();

fs.appendFileSync('greeting.txt','hello '+user.username+' You are '+notes.age);



