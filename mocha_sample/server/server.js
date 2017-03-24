const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send({
        message: 'Hello World!'
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

module.exports.app = app;