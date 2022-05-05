const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

app.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/studentsignup', (req, res, next) => {
    res.sendFile(__dirname, 'public', 'studentSignup.html');
});

app.get('/collegesignup', (req, res, next) => {
    res.sendFile(__dirname, 'public', 'collegeSignup.html');
});

app.listen(3000);