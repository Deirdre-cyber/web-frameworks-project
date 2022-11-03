const mongoose = require('mongoose');

const url = process.env.dbURI;

try {

    mongoose.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected")
    );
}
catch (e) {
    console.log("could not connect");
}
require('./members');
require('./moves');
