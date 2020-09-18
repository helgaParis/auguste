const express = require("express");
const app = express(); // create express app
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
// const { callbackify } = require("util");
const PORT = 5000;
// const MongoClient = require('mongodb').MongoClient;

// const usersRoutes = express.Router();

require('./database');


app.use(cors());
app.use(bodyParser.json());

// exports.getDB = (callback) => {
// const url="mongodb://webUser:34Web75@asf-web.fr:27017/test?authSource=test&readPreference=primary&appname=MongoDB%20Compass&ssl=false"

// const url="mongodb+srv://user:snkn3izMC5JspjxN@cluster0.2tmlk.mongodb.net/test"

// const dbName='perroquet';

// const client = new MongoClient(url,{useNewUrlParser: true,useUnifiedTopology: true});


// client.connect(function(err,db){
//   if(err) {
//     throw err;
//   }
//   console.log('Connected successfully to Atlas server');
//   db=client.db(dbName);
//   db.collection('conseillers').find().toArray(function(err,result) {
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//   });

//   db.collection('contributions').find().toArray(function(err,result) {
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//   });
// });


// client.connect((err) => {
//   if(err){
//     console.log('mongo connection error: ' + err);
//   }
//   console.log('Connected successfully to Atlas server, db perroquet');

//   const db=client.db(dbName);
  // db.collection('users').find().toArray(function(err,result) {
  //       if (err) {
  //         throw err;
  //       }
  //       console.log(result);
  //     });
// });

// app.use(express.static(path.join(__dirname, "..", "build")));
// app.use(express.static("public"));

// app.use('/users', usersRoutes);


// API
const users = require('./api/users');
app.use('/api/users', users);
// -----
app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})


// start express server on port 5000
app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});