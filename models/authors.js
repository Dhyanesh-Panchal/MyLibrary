const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const authorModel = mongoose.model('Authors', authorSchema);

module.exports = {
    Author: authorModel
}