let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/user_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

//username, firstame, lastname, email, password, age, and looking for are required for  a user
let userSeed = [
  {
    created: new Date(),
    username: "exampleUserNames",
    firstname: "John",
    lastname: "Doe",
    pronouns: "He/Him",
    email: "john@1234.com",
    password: "123test",
    roles: ["Pianist", "violinist"],
    age: 28,
    bio: "I am a pianist classicaly trained and big brained",
    links: [{
      instagram: "Test@working",
      twitter: "Test@working",
      soundcloud: "Test@working",
      spotify: "Test@working",
      bandcamp: "Test@working",
      youtube: "Test@working",
      audiomack: "Test@working",
    }],

    //No looking for to test the default
    
  }
]

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });