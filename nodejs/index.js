var express = require('express');

// Constants
var PORT = 9000;

// App
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World from CentOS6 in Docker\n');
});

app.get('/index.html', function (req, res) {
    res.send('Hello World from CentOS6 in Docker\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);