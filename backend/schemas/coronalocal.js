const mongoose = require('mongoose');

var coronalocalSchema = mongoose.Schema({
    _id: Number,
    createDt: String,
    deathCnt: Number,
    defCnt: Number,
    gubun: String,
    incDec: Number,
    isolClearCnt: Number,
    isolIngCnt: Number,
    localOccCnt: Number,
    overFlowCnt: Number
});

//조회
// coronalocalSchema.statics.findOne = function(gubun){
//     return this.findOne({
//         gubun
//     }).exec();
// }


// coronadailyModel.find(function(err,models){
//     if(err) return console.err(err);
//     //console.log(models);
// });

module.exports = mongoose.model('localdata', coronalocalSchema);
