// User model schema for storing data in database
const mongoose = require('mongoose');

// Structure for userSchema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        maxLength: [20, "Name must be less than 20 character"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        unique: true
    }
})

// exporting user model
module.exports = mongoose.model('User',userSchema);