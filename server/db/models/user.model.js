const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    login: String,
    password: String,
})

const note = mongoose.model("USER",UserSchema );

module.exports = note