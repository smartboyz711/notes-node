console.log('Starting app.js')

const fs  = require('fs')
const os  = require('os')
const _ = require('lodash')
const notes = require('./notes')

// console.log(_.isString(true));
// console.log(_.isString('tonz'));

var filteredArray = _.uniq(['tonz',1,'tonz',1,2,3,4])
console.log(filteredArray)


//var res = notes.addNote();
// var res = notes.add(9,-2);
// console.log('result '+res);

//var user = os.userInfo();

//fs.appendFileSync('greeting.txt','hello '+user.username+' You are '+notes.age);



