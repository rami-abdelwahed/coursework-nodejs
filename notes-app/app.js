const notes = require('./notes');
const yargs = require('yargs');

var argv = yargs.command({
    command: 'add <title> <body>',
    aliases: ['a', 'new'],
    desc: 'Creates a new note or update an existing one',
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
        console.log(`Note ${argv.title} is added.`);
    }
}).help()
    .command({
        command: 'delete <title>',
        aliases: ['remove', 'd'],
        desc: 'Deletes a given note if it exists.',
        handler: (argv) => {
            notes.deleteNote(argv.title);
            console.log(`Note ${argv.title} is deleted.`);
        }
    }).help()
    .command({
        command: 'get <title>',
        aliases: ['getAll', 'ls'],
        desc: 'Gets a note by its title.',
        handler: (argv) => {
            console.log(notes.getNote(argv.title));
        }
    }).help()
    .command({
        command: 'list',
        aliases: ['getAll', 'ls'],
        desc: 'Gets all the available notes.',
        handler: (argv) => {
            console.log(notes.getAllNotes());
        }
    }).help()
    .argv;
