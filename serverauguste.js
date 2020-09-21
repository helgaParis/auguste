const express = require("express");
const app = express(); // create express app
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const PORT = 8003;

require('./server/database');

app.use(cors());
app.use(bodyParser.json());

// API
const users = require('./server/api/users');
app.use('/api/users', users);
// -----
app.use(express.static(path.join(__dirname, 'build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build'))
})

// start express server on port 8003
app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});