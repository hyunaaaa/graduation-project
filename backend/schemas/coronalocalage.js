const mongoose = require('mongoose');

var coronalocalageSchema = mongoose.Schema({
    _id: String,
    confCase: Number,
    confCaseRate: Number,
    createDt: String,
    death: Number,
    deathRate: Number,
    gubun: String,
    gubunEn: String,
    incDec: Number,
    isolClearCnt: Number,
    isolIngCnt: Number,
    localOccCnt: Number,
    overFlowCnt: Number,
    qurRate:Number
   
});

module.exports = mongoose.model('localagedata', coronalocalageSchema);
