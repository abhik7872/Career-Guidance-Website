const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'landing.html'));
});

app.listen(3000);