const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);

    debugger

    if (!duplicateNote) {
        notes.push({
            title,
            body
        })
        saveNotes(notes);
        console.log(chalk.bgGreen('New note added!'));
    } else {
        console.log(chalk.bgRed('Note already exists!'))
    }
}

const removeNote = title => {
    const notes = loadNotes();
    const newNotes = notes.filter(note => note.title !== title);

    if (notes.length === newNotes.length) {
        console.log(chalk.bgRed('No note found!'));
    } else {
        console.log(chalk.bgGreen('Note removed!'));
        saveNotes(newNotes);
    }
}

const listNote = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));
    notes.forEach(note => console.log(note.title));
}

const readNote = title => {
    const notes = loadNotes();
    const found = notes.find(note => note.title === title);

    if (found) {
        console.log(chalk.inverse(found.title));
        console.log(found.body);
    } else {
        console.log(chalk.red('Note not found'));
    }
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }    
}

module.exports = {
    addNote,
    removeNote,
    listNote,
    readNote
}