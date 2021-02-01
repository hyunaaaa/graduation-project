const mongoose = require('mongoose');

var coronaageSchema = mongoose.Schema({
    _id: String,
    confCase: Number,
    confCaseRate: Number,
    createDt: String,
    criticalRate: Number,
    death: Number,
    deathRate: Number,
    gubun: String
});

module.exports = mongoose.model('agedata', coronaageSchema);
