var express = require('express');

// Create a new app

var app = express();

app.use(express.static('public'));

app.listen('3000', function () {
    console.log('Server up and listening to port 3000');
});
