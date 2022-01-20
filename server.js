const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');
const { send } = require('express/lib/response');
const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

const { animals } = require('./data/animals.json');

const PORT = process.env.PORT || 3001;

//for some reason moving this to my html.js file in htmlRoutes breaks the page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
////////
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});