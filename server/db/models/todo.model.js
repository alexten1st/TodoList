const mongoose = require("mongoose")

const TodoSchema = mongoose.Schema({
    email: String,
    description: String,
    userName: String,
    done: {
        type: Boolean,
        default: false,
    }, 
    wasEdited: {
        type: Boolean,
        default: false,
    }
})

const note = mongoose.model("TODO",TodoSchema );

module.exports = note