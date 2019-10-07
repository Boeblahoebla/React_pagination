// Imports
//////////

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
/////////

const userSchema = new Schema({
    "first_name": String,
    "last_name": String,
    "email": String,
    "gender": String,
    "ip_address": String
});

// Exports
//////////

module.exports
    = users
    = mongoose.model(
        'users',
        userSchema,
        'usersCollection');


