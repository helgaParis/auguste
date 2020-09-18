
const mongoose = require('mongoose');
const connection = "mongodb+srv://user:snkn3izMC5JspjxN@cluster0.2tmlk.mongodb.net/perroquet";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));