const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended:true }));
const Local = require('../schemas/coronalocal');

//전체 조회
router.get('/', function(req, res) {
    Local.find( {}, function(err, locals) {
        if (err) return res.status(500).send('조회 실패');
        res.status(200).send(locals);
    }).sort({createDt:-1});
});

//지역 이름으로 조회
router.get('/:gubunEn', (req,res)=>{
    Local.find({gubunEn: req.params.gubunEn}, (err, locals)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!locals) return res.status(404).send('내용 없음');
        res.status(200).send(locals);
    });
});
//지역이름에서 날짜로 조회
router.get('/:gubunEn/:createDt', (req,res)=>{
    Local.find({gubunEn: req.params.gubunEn, createDt: req.params.createDt}, (err, locals)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!locals) return res.status(404).send('내용 없음');
        res.status(200).send(locals);
    });
});
//지역이름에서 날짜 범위로 조회
router.get('/:gubunEn/:startDt/:endDt', (req,res)=>{
    Local.find({gubunEn: req.params.gubunEn, createDt: {'$gte': req.params.startDt, '$lte': req.params.endDt}} ,(err,locals)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!locals) return res.status(404).send('내용 없음');
        res.status(200).send(locals);
    }).sort({createDt:1});
});

module.exports = router;