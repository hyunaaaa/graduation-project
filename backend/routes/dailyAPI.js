const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended:true }));
const Daily = require('../schemas/coronadaily');

//전체 조회
router.get('/', function(req, res) {
    Daily.find( {}, function(err, dailys) {
        if (err) return res.status(500).send('조회 실패');
        res.status(200).send(dailys);
    }).sort({seq:-1});
});

//특정 조회
router.get('/:startDt/:endDt', (req,res)=>{
    Daily.find({_id: {'$gte': req.params.startDt, '$lte': req.params.endDt}}, (err, dailys)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!dailys) return res.status(404).send('내용 없음');
        res.status(200).send(dailys);
    }).sort({seq:-1});
});
router.get('/decideCnt/:startRange/:endRange', (req,res)=>{
    Daily.find({decideCnt: {'$gte': req.params.startRange, '$lte': req.params.endRange}}, (err, dailys)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!dailys) return res.status(404).send('내용 없음');
        res.status(200).send(dailys);
    }).sort({seq:-1});
});
router.get('/clearCnt/:startRange/:endRange', (req,res)=>{
    Daily.find({clearCnt: {'$gte': req.params.startRange, '$lte': req.params.endRange}}, (err, dailys)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!dailys) return res.status(404).send('내용 없음');
        res.status(200).send(dailys);
    }).sort({seq:-1});
});
router.get('/deathCnt/:startRange/:endRange', (req,res)=>{
    Daily.find({deathCnt: {'$gte': req.params.startRange, '$lte': req.params.endRange}}, (err, dailys)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!dailys) return res.status(404).send('내용 없음');
        res.status(200).send(dailys);
    }).sort({seq:-1});
});
router.get('/careCnt/:startRange/:endRange', (req,res)=>{
    Daily.find({careCnt: {'$gte': req.params.startRange, '$lte': req.params.endRange}}, (err, dailys)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!dailys) return res.status(404).send('내용 없음');
        res.status(200).send(dailys);
    }).sort({seq:-1});
});
router.get('/examCnt/:startRange/:endRange', (req,res)=>{
    Daily.find({examCnt: {'$gte': req.params.startRange, '$lte': req.params.endRange}}, (err, dailys)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!dailys) return res.status(404).send('내용 없음');
        res.status(200).send(dailys);
    }).sort({seq:-1});
});
router.get('/resultNegCnt/:startRange/:endRange', (req,res)=>{
    Daily.find({resultNegCnt: {'$gte': req.params.startRange, '$lte': req.params.endRange}}, (err, dailys)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!dailys) return res.status(404).send('내용 없음');
        res.status(200).send(dailys);
    }).sort({seq:-1});
});
router.get('/accDefRate/:startRange/:endRange', (req,res)=>{
    Daily.find({accDefRate: {'$gte': req.params.startRange, '$lte': req.params.endRange}}, (err, dailys)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!dailys) return res.status(404).send('내용 없음');
        res.status(200).send(dailys);
    }).sort({seq:-1});
});
router.get('/accExamCnt/:startRange/:endRange', (req,res)=>{
    Daily.find({accExamCnt: {'$gte': req.params.startRange, '$lte': req.params.endRange}}, (err, dailys)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!dailys) return res.status(404).send('내용 없음');
        res.status(200).send(dailys);
    }).sort({seq:-1});
});
router.get('/accExamCompCnt/:startRange/:endRange', (req,res)=>{
    Daily.find({accExamCompCnt: {'$gte': req.params.startRange, '$lte': req.params.endRange}}, (err, dailys)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!dailys) return res.status(404).send('내용 없음');
        res.status(200).send(dailys);
    }).sort({seq:-1});
});

module.exports = router;