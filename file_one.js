const notes = require('./file_two.js');
const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')


// console.log(validator.isEmail('absep98@gmail.com'))
// const value = getNotes()
// console.log(value)
// const log = console.log
// console.log(chalk.red('Mr.Aks'))
// console.log(chalk.green.bgRed.bold('Hello World, Please welcome Mr.Aks'))
// console.log(chalk.green.inverse.bold('Hello World, Please welcome Mr.Aks'))


//console.log(process.argv)
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note now mf',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Provide the description',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('Title :' +  argv.title)
        // console.log('Body: ' + argv.description)
        notes.addNote(argv.title,argv.description)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Deleting the note',
    builder: {
        title:
        {
            describe:'Note title to delete it',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('Deleted it')
        notes.deleteNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing out all the notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'reading out the notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log(argv.title)
    }
})

// console.log(yargs.argv)
yargs.parse()