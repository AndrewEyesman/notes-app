const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// const command = process.argv[2];

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }

// Customize yargs version
yargs.version('1.1.0');

// Add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// Remove command
yargs.command({
    command: "remove",
    describe: "Remove note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// List command
yargs.command({
    command: "list",
    describe: "Lists the note",
    handler() {
        notes.listNote();
    }
})

// Read command
yargs.command({
    command: "read",
    describe: "Displays the note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

// add, remove, read, list

// console.log(process.argv);
// console.log(yargs.argv);

yargs.parse();