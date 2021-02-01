const { text } = require('body-parser');
const mongoose = require('mongoose');


var newsSchema = mongoose.Schema({
    _id: String,
    title: String,
    time : String,
    imgsrc : String,
    content : String
});

newsSchema.index({title:'text'});

module.exports = mongoose.model('navernew', newsSchema);
