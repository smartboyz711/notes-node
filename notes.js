console.log('Starting notes.js');

const fs = require('fs')
var notename = 'notes-data.json'

var fetchNotes = () => {
     try{
        var noteString = fs.readFileSync(notename)
        return JSON.parse(noteString)
    }catch (e) {
        return []
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync(notename,JSON.stringify(notes))
}

var addNote = (title,body) => {
    var notes = fetchNotes()
    var note = {
        title,
        body
    }
    var duplicatNotes = notes.filter((array) => array.title === title)
    if(duplicatNotes.length === 0){
        notes.push(note)
        saveNotes(notes)
        return note
    }
}
var getAll = () => {
    console.log('Getting all notes')
}
var getNote = (title) => {
    console.log('Getting note',title)
}
var removeNote = (title) => {
    var notes = fetchNotes()
    var notDuplicatNotes = notes.filter((obj) => obj.title !== title)
    saveNotes(notDuplicatNotes)
    return notes.length !== notDuplicatNotes.length
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}