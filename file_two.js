const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return "Now I'm coming back man";
}

const addNote = (title,description) => {
    const note = loadNotes()
    //const duplicateNotes = note.filter((nt) => nt.title === title)
    // const duplicateNotes = note.filter(function (nt) {
    //     return nt.title === title
    // })
    const duplicateNote = note.find((nt) => nt.title === title)
    if(!duplicateNote) {
        note.push({
            title: title,
            description: description
        })
        console.log(note + ' Added it man!')
        saveNotes(note)
    } else {
        console.log('Note title taken')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('text.json',dataJSON)
}

const loadNotes = () => {
    try {
        const databuffer = fs.readFileSync('text.json')
        const datajson = databuffer.toString()
        return JSON.parse(datajson)
    } catch(e)
    {
        return []
    }
}

const deleteNote = (title) => {
    // console.log('Deleted the particular note')
    const notes = loadNotes()
    // const duplicatenotes = notes.filter(function (nt) {
    //     return nt.title !== title
    // })
    const duplicatenotes = notes.filter((nt) => nt.title !== title)
    if(notes.length === duplicatenotes.length){
        console.log(chalk.red.inverse.bold('Nothing to delete it'))
    } else{
        console.log(chalk.green.inverse.bold('Deleted it Man fk now'))
    }
    saveNotes(duplicatenotes)

}

const listNotes = () => {

    const notes = loadNotes()

    console.log(chalk.inverse('Your Notes'))
    notes.forEach((note) => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

// module.exports = getNotes
// it will return just one value so see below to get multiple values

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    deleteNote: deleteNote,
    listNotes: listNotes,
    readNote:readNote
}
