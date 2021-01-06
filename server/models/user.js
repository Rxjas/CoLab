//require the mongoose package
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//username, firstame, lastname, email, password, age, and looking for are required for  a user
const userSchema = new Schema({

    username: {
        type: String,
        trim: true,
        unique: true,
        required: 'Please enter a username'
    },

    firstname: {
        type: String,
        trim: true,
        required: 'Please enter a first name'
    },

    lastname: {
        type: String,
        trim: true,
        required: 'Please enter a last name'
    },

    pronouns: {
        type: String,
        trim: true,
    },

    email: {
        type: String,
        unique: true,
        trim: true,
        required: 'Please enter an email address'
    },

    password: {
        type: String,
        required: 'Please enter a password'
    },

    roles: [{
        type: String,
    }],

    age: {
        type: Number,
        required: 'Please enter your age'
    },

    bio: {
        type: String,
        trim: true,
        default: "Sorry! My Bio is currently under construction!"
    },

    //push genres they like into the array
    likedgenres: [{}],


    links: [{

        instagram: { type: String, trim: true },
        twitter: { type: String, trim: true },
        facebook: { type: String, trim: true },
        soundcloud: { type: String, trim: true },
        spotify: { type: String, trim: true },
        bandcamp: { type: String, trim: true },
        youtube: { type: String, trim: true },
        audiomack: { type: String, trim: true },

    }],

    lookingfor: {
        type: String,
        trim: true,
        required: true,
        default: "Just Browsing"
    },

    //TO BE CONTINUED
    chats: [{
        userID: [{}],
        messageID: [{}]
    }],

    created: { type: Date, default: new Date() },

},
    {

        //json magic
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }

    });// end of user schema

const User = mongoose.model("user", userSchema);

module.exports = User;