
const dataApi = require('./data_access');

var getAllNotes = () => {
    var notes = dataApi.getAllNotes();
    return notes;
}

var getNote = (title) => {
    var note = dataApi.getNoteByTitle(title);
    return note;
}

var addNote = (title, body) => {
    dataApi.insertNote(title, body);
}

var deleteNote = (title) => {
    dataApi.deleteNoteByTitle(title);
}

module.exports = {
    getAllNotes,
    getNote,
    addNote,
    deleteNote
}