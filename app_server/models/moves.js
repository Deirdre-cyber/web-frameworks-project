const mongoose = require('mongoose');

const moveSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
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
        instruction: {
            type: String,
            required: true
        },
        muscle_groups: {
            type: [String],
            required: true
        },
        conditioning: {
            type: [String],
            required: true
        },
        image: {
            type: String,
            unique: true,
            required: true
        }
    }
);

mongoose.model('Moves', moveSchema);