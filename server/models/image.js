var mongoose = require('mongoose');
 
var imageSchema = new mongoose.Schema({
    name: String,
    // later, a user id will be added to the Model
    img:
    {
        data: Buffer,
        contentType: String
    },
    username: {
      contentType: String,
      unique: true,
    }
});


const Image = mongoose.model("Image", imageSchema);
 
module.exports = Image