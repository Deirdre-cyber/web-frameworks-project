const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['Ballerina', 'Brass Monkey', 'Shoulder Mount', 'Butterfly', 'Cupid', 'Ayesha', 'Anastasia Frog', 'Genie', 'Flatline Scorpio', 'Hood Ornament', 'Jasmine', 'Superman'],
        default: 'Brass Monkey'
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
