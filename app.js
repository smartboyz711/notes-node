console.log('Starting app.js')

const fs  = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')
const titleOption = {
    describe: 'Title of note',
    demand : true,
    alias: 't'
}
const bodyOption = {
    describe: 'Body of note',
    demand : true,
    alias: 'b'
}


const argv = yargs
    .command('add','Add a new note', {
        title : titleOption,
        body: bodyOption
    })
    .command('list','List all Notes')
    .command('read','Read Note by title',{
        title : titleOption
    })
    .command('remove','Remove Note by title',{
        title : titleOption
    })
    .help()
    .argv
var command = argv._[0];
console.log('command:',command)
console.log('Yargs',argv)

if(command == 'add'){
    var note = notes.addNote(argv.title,argv.body)
    if(!_.isUndefined(note)){
        console.log('Writed note Success')
        notes.logNote(note)
    }else{
        console.log('title '+argv.title+' already in notes')
    }
}else if(command == 'list'){
    var allNotes = notes.getAll()
    console.log('Printing '+allNotes.length+' notes')
    allNotes.forEach((note) => notes.logNote(note))

}else if(command == 'read'){
    var foundnote = notes.getNote(argv.title)
    if(foundnote){
        console.log('Note Found')
        notes.logNote(foundnote)
    }else{
        console.log('Note not Found')
    }

}else if(command == 'remove'){
    var remove = notes.removeNote(argv.title)
    var message = remove ? 'Note was removed' : 'title '+argv.title+' not exists'
    console.log(message)
}
else {
    console.log('Command not recognized')
}




