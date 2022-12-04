var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

const favouriteSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['Ballerina', 'Brass Monkey', 'Shoulder Mount', 'Butterfly', 'Cupid', 'Ayesha', 'Anastasia Frog', 'Genie', 'Flatline Scorpio', 'Hood Ornament', 'Jasmine', 'Superman'],
        default: 'Brass Monkey'
    }
});

const Member = new mongoose.Schema({
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
    username: {
        type: String,
        required: true,
        unique: true
    },
    level: {
        type: String,
        'default': "Beginner"
    },
    favourites: [favouriteSchema]
});

Member.plugin(passportLocalMongoose);

mongoose.model('Favourites', favouriteSchema);


module.exports = mongoose.model('Members', Member);