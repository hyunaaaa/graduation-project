const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended:true }));
const Al = require('../schemas/coronalocalage');

//전체 조회
router.get('/', function(req, res) {
    Al.find( {}, function(err, als) {
        if (err) return res.status(500).send('조회 실패');
        res.status(200).send(als);
    }).sort({createDt:-1});
});
router.get('/all', function(req, res) {
    Al.find({gubunEn:{'$nin':['0-9','10-19','20-29','30-39','40-49','50-59','60-69','70-79','80','female','male']}}, function(err, als) {
        if (err) return res.status(500).send('조회 실패');
        res.status(200).send(als);
    }).sort({createDt:-1});
});
router.get('/allage', function(req, res) {
    Al.find({gubunEn:{'$in':['0-9','10-19','20-29','30-39','40-49','50-59','60-69','70-79','80']}}, function(err, als) {
        if (err) return res.status(500).send('조회 실패');
        res.status(200).send(als);
    }).sort({createDt:-1});
});
router.get('/allsex', function(req, res) {
    Al.find({gubunEn:{'$in':['female','male']}}, function(err, als) {
        if (err) return res.status(500).send('조회 실패');
        res.status(200).send(als);
    }).sort({createDt:-1});
});
router.get('/all/allage', function(req, res) {
    Al.find({gubunEn:{'$nin':['female','male']}}, function(err, als) {
        if (err) return res.status(500).send('조회 실패');
        res.status(200).send(als);
    }).sort({createDt:-1});
});
router.get('/all/allsex', function(req, res) {
    Al.find({gubunEn:{'$nin':['0-9','10-19','20-29','30-39','40-49','50-59','60-69','70-79','80']}}, function(err, als) {
        if (err) return res.status(500).send('조회 실패');
        res.status(200).send(als);
    }).sort({createDt:-1});
});
router.get('/allage/allsex', function(req, res) {
    Al.find({gubunEn:{'$in':['0-9','10-19','20-29','30-39','40-49','50-59','60-69','70-79','80','female','male']}}, function(err, als) {
        if (err) return res.status(500).send('조회 실패');
        res.status(200).send(als);
    }).sort({createDt:-1});
});
router.get('/all/allage/allsex', function(req, res) {
    Al.find({}, function(err, als) {
        if (err) return res.status(500).send('조회 실패');
        res.status(200).send(als);
    }).sort({createDt:-1});
});

//지역을 전체로 설정했을때 조회
router.get('/all/:startDt/:endDt',(req,res)=>{
    Al.find({gubunEn:{'$nin':['0-9','10-19','20-29','30-39','40-49','50-59','60-69','70-79','80','female','male']},createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
//연령을 전체로 설정했을때 조회
router.get('/allage/:startDt/:endDt',(req,res)=>{
    Al.find({gubunEn:{'$in':['0-9','10-19','20-29','30-39','40-49','50-59','60-69','70-79','80']},createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
//성별을 전체로 설정했을때 조회
router.get('/allsex/:startDt/:endDt',(req,res)=>{
    Al.find({gubunEn:{'$in':['female','male']},createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
//지역과 연령을 전체로 설정했을때 조회
router.get('/all/allage/:startDt/:endDt',(req,res)=>{
    Al.find({gubunEn:{'$nin':['female','male']},createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
//연령과 성별을 전체로 설정했을때 조회
router.get('/allage/allsex/:startDt/:endDt',(req,res)=>{
    Al.find({gubunEn:{'$in':['0-9','10-19','20-29','30-39','40-49','50-59','60-69','70-79','80','female','male']},createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
//지역과 성별을 전체로 설정했을때 조회
router.get('/all/allsex/:startDt/:endDt',(req,res)=>{
    Al.find({gubunEn:{'$nin':['0-9','10-19','20-29','30-39','40-49','50-59','60-69','70-79','80']},createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
//지역 연령 성별을 전체로 설정했을때 조회
router.get('/all/allage/allsex/:startDt/:endDt',(req,res)=>{
    Al.find({createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});

//날짜와 지역구분으로 조회
router.get('/:gubunEn/:startDt/:endDt', (req,res)=>{
    Al.find({gubunEn: req.params.gubunEn, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
router.get('/:gubunEn1/:gubunEn2/:startDt/:endDt', (req,res)=>{
    Al.find({gubunEn:{'$in':[req.params.gubunEn1, req.params.gubunEn2]}, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});

router.get('/:gubunEn1/:gubunEn2/:gubunEn3/:startDt/:endDt', (req,res)=>{
    Al.find({gubunEn:{'$in':[req.params.gubunEn1, req.params.gubunEn2,req.params.gubunEn3]}, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
router.get('/:gubunEn1/:gubunEn2/:gubunEn3/:gubunEn4/:startDt/:endDt', (req,res)=>{
    Al.find({gubunEn:{'$in':[req.params.gubunEn1, req.params.gubunEn2,req.params.gubunEn3, req.params.gubunEn4]}, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
router.get('/:gubunEn1/:gubunEn2/:gubunEn3/:gubunEn4/:gubunEn5/:startDt/:endDt', (req,res)=>{
    Al.find({gubunEn:{'$in':[req.params.gubunEn1, req.params.gubunEn2,req.params.gubunEn3, req.params.gubunEn4,req.params.gubunEn5]}, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
router.get('/:gubunEn1/:gubunEn2/:gubunEn3/:gubunEn4/:gubunEn5/:gubunEn6/:startDt/:endDt', (req,res)=>{
    Al.find({gubunEn:{'$in':[req.params.gubunEn1, req.params.gubunEn2,req.params.gubunEn3, req.params.gubunEn4,req.params.gubunEn5,req.params.gubunEn6]}, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
router.get('/:gubunEn1/:gubunEn2/:gubunEn3/:gubunEn4/:gubunEn5/:gubunEn6/:gubunEn7/:startDt/:endDt', (req,res)=>{
    Al.find({gubunEn:{'$in':[req.params.gubunEn1, req.params.gubunEn2,req.params.gubunEn3, req.params.gubunEn4,req.params.gubunEn5,req.params.gubunEn6, req.params.gubunEn7]}, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
router.get('/:gubunEn1/:gubunEn2/:gubunEn3/:gubunEn4/:gubunEn5/:gubunEn6/:gubunEn7/:gubunEn8/:startDt/:endDt', (req,res)=>{
    Al.find({gubunEn:{'$in':[req.params.gubunEn1, req.params.gubunEn2,req.params.gubunEn3, req.params.gubunEn4,req.params.gubunEn5,req.params.gubunEn6, req.params.gubunEn7, req.params.gubunEn8]}, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
router.get('/:gubunEn1/:gubunEn2/:gubunEn3/:gubunEn4/:gubunEn5/:gubunEn6/:gubunEn7/:gubunEn8/:gubunEn9/:startDt/:endDt', (req,res)=>{
    Al.find({gubunEn:{'$in':[req.params.gubunEn1, req.params.gubunEn2,req.params.gubunEn3, req.params.gubunEn4,req.params.gubunEn5,req.params.gubunEn6, req.params.gubunEn7, req.params.gubunEn8, req.params.gubunEn9]}, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
router.get('/:gubunEn1/:gubunEn2/:gubunEn3/:gubunEn4/:gubunEn5/:gubunEn6/:gubunEn7/:gubunEn8/:gubunEn9/:gubunEn10/:startDt/:endDt', (req,res)=>{
    Al.find({gubunEn:{'$in':[req.params.gubunEn1, req.params.gubunEn2,req.params.gubunEn3, req.params.gubunEn4,req.params.gubunEn5,req.params.gubunEn6, req.params.gubunEn7, req.params.gubunEn8, req.params.gubunEn9, req.params.gubunEn10]}, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
router.get('/:gubunEn1/:gubunEn2/:gubunEn3/:gubunEn4/:gubunEn5/:gubunEn6/:gubunEn7/:gubunEn8/:gubunEn9/:gubunEn10/:gubunEn11/:startDt/:endDt', (req,res)=>{
    Al.find({gubunEn:{'$in':[req.params.gubunEn1, req.params.gubunEn2,req.params.gubunEn3, req.params.gubunEn4,req.params.gubunEn5,req.params.gubunEn6, req.params.gubunEn7, req.params.gubunEn8, req.params.gubunEn9, req.params.gubunEn10, req.params.gubunEn11]}, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
router.get('/:gubunEn1/:gubunEn2/:gubunEn3/:gubunEn4/:gubunEn5/:gubunEn6/:gubunEn7/:gubunEn8/:gubunEn9/:gubunEn10/:gubunEn11/:gubunEn12/:startDt/:endDt', (req,res)=>{
    Al.find({gubunEn:{'$in':[req.params.gubunEn1, req.params.gubunEn2,req.params.gubunEn3, req.params.gubunEn4,req.params.gubunEn5,req.params.gubunEn6, req.params.gubunEn7, req.params.gubunEn8, req.params.gubunEn9, req.params.gubunEn10, req.params.gubunEn11, req.params.gubunEn12]}, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
router.get('/:gubunEn1/:gubunEn2/:gubunEn3/:gubunEn4/:gubunEn5/:gubunEn6/:gubunEn7/:gubunEn8/:gubunEn9/:gubunEn10/:gubunEn11/:gubunEn12/:gubunEn13/:startDt/:endDt', (req,res)=>{
    Al.find({gubunEn:{'$in':[req.params.gubunEn1, req.params.gubunEn2,req.params.gubunEn3, req.params.gubunEn4,req.params.gubunEn5,req.params.gubunEn6, req.params.gubunEn7, req.params.gubunEn8, req.params.gubunEn9, req.params.gubunEn10, req.params.gubunEn11, req.params.gubunEn12, req.params.gubunEn13]}, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
router.get('/:gubunEn1/:gubunEn2/:gubunEn3/:gubunEn4/:gubunEn5/:gubunEn6/:gubunEn7/:gubunEn8/:gubunEn9/:gubunEn10/:gubunEn11/:gubunEn12/:gubunEn13/:gubunEn14/:startDt/:endDt', (req,res)=>{
    Al.find({gubunEn:{'$in':[req.params.gubunEn1, req.params.gubunEn2,req.params.gubunEn3, req.params.gubunEn4,req.params.gubunEn5,req.params.gubunEn6, req.params.gubunEn7, req.params.gubunEn8, req.params.gubunEn9, req.params.gubunEn10, req.params.gubunEn11, req.params.gubunEn12, req.params.gubunEn13, req.params.gubunEn14]}, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
router.get('/:gubunEn1/:gubunEn2/:gubunEn3/:gubunEn4/:gubunEn5/:gubunEn6/:gubunEn7/:gubunEn8/:gubunEn9/:gubunEn10/:gubunEn11/:gubunEn12/:gubunEn13/:gubunEn14/:gubunEn15/:startDt/:endDt', (req,res)=>{
    Al.find({gubunEn:{'$in':[req.params.gubunEn1, req.params.gubunEn2,req.params.gubunEn3, req.params.gubunEn4,req.params.gubunEn5,req.params.gubunEn6, req.params.gubunEn7, req.params.gubunEn8, req.params.gubunEn9, req.params.gubunEn10, req.params.gubunEn11, req.params.gubunEn12, req.params.gubunEn13, req.params.gubunEn14, req.params.gubunEn15]}, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
router.get('/:gubunEn1/:gubunEn2/:gubunEn3/:gubunEn4/:gubunEn5/:gubunEn6/:gubunEn7/:gubunEn8/:gubunEn9/:gubunEn10/:gubunEn11/:gubunEn12/:gubunEn13/:gubunEn14/:gubunEn15/:gubunEn16/:startDt/:endDt', (req,res)=>{
    Al.find({gubunEn:{'$in':[req.params.gubunEn1, req.params.gubunEn2,req.params.gubunEn3, req.params.gubunEn4,req.params.gubunEn5,req.params.gubunEn6, req.params.gubunEn7, req.params.gubunEn8, req.params.gubunEn9, req.params.gubunEn10, req.params.gubunEn11, req.params.gubunEn12, req.params.gubunEn13, req.params.gubunEn14, req.params.gubunEn15, req.params.gubunEn16]}, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});
router.get('/:gubunEn1/:gubunEn2/:gubunEn3/:gubunEn4/:gubunEn5/:gubunEn6/:gubunEn7/:gubunEn8/:gubunEn9/:gubunEn10/:gubunEn11/:gubunEn12/:gubunEn13/:gubunEn14/:gubunEn15/:gubunEn16/:gubunEn17/:startDt/:endDt', (req,res)=>{
    Al.find({gubunEn:{'$in':[req.params.gubunEn1, req.params.gubunEn2,req.params.gubunEn3, req.params.gubunEn4,req.params.gubunEn5,req.params.gubunEn6, req.params.gubunEn7, req.params.gubunEn8, req.params.gubunEn9, req.params.gubunEn10, req.params.gubunEn11, req.params.gubunEn12, req.params.gubunEn13, req.params.gubunEn14, req.params.gubunEn15, req.params.gubunEn16, req.params.gubunEn17]}, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});


//날짜 범위만으로 조회
router.get('/:startDt/:endDt', (req,res)=>{
    Al.find({createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}},(err,als)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!als) return res.status(404).send('내용 없음');
        res.status(200).send(als);
    }).sort({createDt:1});
});

module.exports = router;