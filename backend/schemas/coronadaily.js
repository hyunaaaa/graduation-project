const mongoose = require('mongoose');

var coronadailySchema = mongoose.Schema({
    _id: String,
    accDefRate: Number,
    accExamCnt: Number,
    accExamCompCnt: Number,
    careCnt: Number,
    clearCnt: Number,
    deathCnt: Number,
    decideCnt: Number,
    examCnt: Number,
    resultNegCnt: Number,
    seq:Number
});

//조회
// coronadailySchema.statics.findOne = function(_id){
//     return this.findOne({
//         _id
//     }).exec();
// }

//var coronadailyModel = mongoose.model('dailydata', coronadailySchema);

// coronadailyModel.find(function(err,models){
//     if(err) return console.err(err);
//     //console.log(models);
// });

module.exports = mongoose.model('dailydata', coronadailySchema);
