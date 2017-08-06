console.log('Starting app.js')

const fs  = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const argv = yargs.argv
var command = argv._[0];
console.log('command:',command)
console.log('Yargs',argv)

if(command == 'add'){
    var note = notes.addNote(argv.title,argv.body)
    if(!_.isUndefined(note)){
        console.log('Writed note Success : title = '+note.tite+', body = '+note.body)
    }else{
        console.log('title '+argv.title+' already in notes')
    }
}else if(command == 'list'){
    notes.getAll()
}else if(command == 'read'){
    notes.getNote(argv.title)
}else if(command == 'remove'){
    var remove = notes.removeNote(argv.title)
    var message = remove ? 'Note was removed' : 'title '+argv.title+' not exists'
    console.log(message)
}
else {
    console.log('Command not recognized')
}


