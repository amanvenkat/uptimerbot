const mongoose = require('mongoose');

async function connect() {
    mongoose.connect(`mongodb+srv://test:test@cluster0.p5eht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Connected to Database");
}


module.exports = connect();