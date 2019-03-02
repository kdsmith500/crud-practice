var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var derpSchema = new Schema({
    stuff: {
        type: String
    },
    things: {
        type: Number
    },
    otherstuff: {
        type: Boolean
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Derp', derpSchema);