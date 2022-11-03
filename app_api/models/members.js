const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        'default': 0,
        min: 0,
        max: 3
    },
    image: {
        type: String,
        required: true
    }
});

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    level: {
        type: String,
        'default': "Beginner"
    },
    favourites: [favouriteSchema]
});

mongoose.model('Favourites', favouriteSchema);
mongoose.model('Members', userSchema);
