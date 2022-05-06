const express = require('express');
const path = require('path');
const loginRoutes = require('./routes/login');
const studentsignupRoutes = require('./routes/studentsignup');
const collegesignupRoutes = require('./routes/collegesignup');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use('/login', loginRoutes);
app.use('/studentsignup', studentsignupRoutes);
app.use('/collegesignup', collegesignupRoutes);

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

app.listen(3000, () => {console.log(`Server running on http://localhost:${3000}`)});