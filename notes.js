console.log('Starting notes.js');

const fs = require('fs')

var addNote = (title,body) => {
    var notename = 'notes-data.json'
    var notes = []
    var note = {
        title,
        body
    }

    try{
        var noteString = fs.readFileSync(notename)
        notes = JSON.parse(noteString)
    }catch (e) {
        //console.log('File '+notename+' Not Found')
    }

    var duplicatNotes = notes.filter((note) => note.title === title)

    if(duplicatNotes.length === 0){
        notes.push(note)
        fs.writeFileSync(notename,JSON.stringify(notes))
    }
}
var getAll = () => {
    console.log('Getting all notes')
}
var getNote = (title) => {
    console.log('Getting note',title)
}
var removeNote = (title) => {
    console.log('Remove note',title)
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}