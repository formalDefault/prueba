const mongoose = require('mongoose');

const URI = "mongodb+srv://root:ca6802ff14@crm.qdju1.mongodb.net/crm?retryWrites=true&w=majority"

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});

// mongoose.connect(URI)
//     .then(console.log('conectado'))
//     .catch(err => console.error(err));

module.exports = mongoose; 