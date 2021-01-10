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
    lookingfor: "A cool calm singer for covers",
    chats: [
      {
        involvedUUIDs: ["DanaStoreSuper"],
        channelID: "chats.room1"
      }
    ]
  },//end of john doe user
  {
    created: new Date(),
    username: "DanaStoreSuper",
    firstname: "Dana",
    lastname: "Happy",
    pronouns: "She/Her",
    email: "Dana28@1234.com",
    password: "12345test",
    roles: ["Vocalist", "violinist"],
    age: 28,
    bio: "I am a Vocalist classicaly trained and big brained",
    links: [{
      instagram: "Test@working",
      twitter: "Test@working",
      soundcloud: "Test@working",
      spotify: "Test@working",
      bandcamp: "Test@working",
      youtube: "Test@working",
      audiomack: "Test@working",
    }],
    lookingfor: "A cool calm pianist for covers",
    chats: [
      {
        involvedUUIDs: ["exampleUserNames"],
        channelID: "chats.room1"
      },
      {
        involvedUUIDs: ["TomNookConfirmed", "RoboT3"],
        channelID: "chats.room4"
      }
    ]
  },//end of Dana Happy user
  {
    created: new Date(),
    username: "TomNookConfirmed",
    firstname: "Tom",
    lastname: "Nook",
    pronouns: "They/them",
    email: "RealTomNook@1234.com",
    password: "123Money",
    roles: ["Harp", "Vocal", "Everything"],
    age: 28,
    bio: "I am a Racoon from Animal Crossing",
    links: [{
      instagram: "Test@working",
      twitter: "Test@working",
      soundcloud: "Test@working",
      spotify: "Test@working",
      bandcamp: "Test@working",
      youtube: "Test@working",
      audiomack: "Test@working",
    }],
    lookingfor: "Bells I need and crave bells.",
    chats: [
      {
        involvedUUIDs: ["RealScreamer"],
        channelID: "chats.room2"
      },
      {
        involvedUUIDs: ["DanaStoreSuper", "RoboT3"],
        channelID: "chats.room4"
      }
    ]
  }, //end of Tom Nook user
  {
    created: new Date(),
    username: "RealScreamer",
    firstname: "Timothy",
    lastname: "Loud",
    pronouns: "He/Him",
    email: "LOUDLOUD@1234.com",
    password: "123LOUD",
    roles: ["Bassist", "Screamer", "Choir"],
    age: 28,
    bio: "I am a man that plays loud and screams loud",
    links: [{
      instagram: "Test@working",
      twitter: "Test@working",
      soundcloud: "Test@working",
      spotify: "Test@working",
      bandcamp: "Test@working",
      youtube: "Test@working",
      audiomack: "Test@working",
    }],
    lookingfor: "I need more loud people for a loud band",
    chats: [
      {
        involvedUUIDs: ["TomNookConfirmed"],
        channelID: "chats.room2"
      },
      {
        involvedUUIDs: ["RoboT3"],
        channelID: "chats.room3"
      }
    ]
  },//end of Timouthy Loud user
  {
    created: new Date(),
    username: "RoboT3",
    firstname: "Robo",
    lastname: "T3",
    pronouns: "They/them",
    email: "ROBOTROBOTROBOT@1234.com",
    password: "123ROBOT",
    roles: ["Robot"],
    age: 28,
    bio: "I am a robot. Very big brained.",
    links: [{
      instagram: "Test@working",
      twitter: "Test@working",
      soundcloud: "Test@working",
      spotify: "Test@working",
      bandcamp: "Test@working",
      youtube: "Test@working",
      audiomack: "Test@working",
    }],
    lookingfor: "World domination",
    chats: [
      {
        involvedUUIDs: ["RealScreamer"],
        channelID: "chats.room3"
      },
      {
        involvedUUIDs: ["exampleUserNames", "DanaStoreSuper"],
        channelID: "chats.room4"
      }
    ]
  }//end of ROBOTT3
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