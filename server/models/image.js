var mongoose = require('mongoose');
 
var imageSchema = new mongoose.Schema({
    img:
    {
        data: Buffer,
        contentType: String
    },
    username: String,
});


const Image = mongoose.model("Image", imageSchema);
 
module.exports = Image