// var obj = {
//     name: 'tonz'
// }
// var stringObj = JSON.stringify(obj)
// console.log(typeof stringObj)
// console.log(stringObj)

// var personString = '{"name" : "Tonz","age" : 24}'
// var person = JSON.parse(personString)
// console.log(typeof person)
// console.log(person)

const fs = require('fs')
var orignalNote = {
    title : 'Some title',
    body : 'Some body'
}
var orignalNoteString = JSON.stringify(orignalNote)
fs.writeFileSync('notes.json',orignalNoteString)
var noteString = fs.readFileSync('notes.json')
var note = JSON.parse(noteString)

console.log(typeof note)
console.log(note.title)
