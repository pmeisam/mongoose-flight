var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', "DAL", "LAX", "SEA"]
    },
    arrival: {
        type: Date,
        default: Date.now
    }
});

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: Date.now
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', "LAX", "SEA"],
        default: "SEA"
    },
    destinations: {
        type: [destinationSchema]
    }
});

module.exports = mongoose.model('Flight', flightSchema);