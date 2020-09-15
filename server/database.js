// const MongoClient = require('mongodb').MongoClient;

// const url="mongodb+srv://user:snkn3izMC5JspjxN@cluster0.2tmlk.mongodb.net/test"

// const dbName='perroquet';

// const client = new MongoClient(url,{useNewUrlParser: true,useUnifiedTopology: true});

// client.connect((err) => {
//     if(err){
//       console.log('mongo connection error: ' + err);
//     }
//     console.log('Connected successfully to Atlas server, db perroquet');
  
//     const db=client.db(dbName);
//     db.collection('users').find().toArray(function(err,result) {
//           if (err) {
//             throw err;
//           }
//           console.log(result);
//         });
//   });



const mongoose = require('mongoose');
const connection = "mongodb+srv://user:snkn3izMC5JspjxN@cluster0.2tmlk.mongodb.net/perroquet";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));