//This module abstracts the dataaccess layer for mainpulating the Notes.
const fs = require('fs');
const _  = require('lodash')
const dataFile = './data/notes.json';


var fetchData = () => {
    var rawData = fs.readFileSync(dataFile);
    var data = [];
    if(!_.isEmpty(rawData)) {
        data = JSON.parse(rawData);
    } 
    if(! _.isArray(data)) {
        data = [];
    }
    return data;
}

var saveData = (data) => {
    if(_.isArray(data)) {
        fs.writeFileSync(dataFile, JSON.stringify(data));
    }
}

var insertNote = (title, body) => {
    var data = fetchData();
    var existingItems = data.filter((item) => item.title === title);
    if(existingItems.length > 0) {
        existingItems[0].body = body;        
    } else {
        data.push({
            title,
            body
        });
    }
    saveData(data);
}

var getAllNotes = () => {
    return fetchData();
}

var getNoteByTitle = (title) => {
    var data = fetchData();
    var existingItems = data.filter((item) => item.title === title);
    var note = {};
    if(existingItems.length > 0) {
        note = existingItems[0];
    }
    return note;
}

var deleteNoteByTitle = (title) => {
    var data = fetchData();
    var filteredNotes = data.filter((item) => item.title !== title);
    saveData(filteredNotes);
}

module.exports = {
    getAllNotes,
    getNoteByTitle,
    insertNote,
    deleteNoteByTitle
}