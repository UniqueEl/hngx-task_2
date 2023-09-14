const mongoose = require('mongoose');

// create a structure for the "person" collection
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;