const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended:true }));
const Age = require('../schemas/coronaage');
//const Local = require('../schemas/coronalocal');

//전체 조회
router.get('/', function(req, res) {
    Age.find( {}, function(err, ages) {
        if (err) return res.status(500).send('조회 실패');
        res.status(200).send(ages);
    });
    // Local.find( {}, function(err, locals) {
    //     if (err) return res.status(500).send('조회 실패');
    //     res.status(200).send(locals);
    // });
});

//구분으로 조회
router.get('/gubun/:gubun', (req,res)=>{
    Age.find({gubun: req.params.gubun}, (err, ages)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!ages) return res.status(404).send('내용 없음');
        res.status(200).send(ages);
    });
});

//날짜로 조회
router.get('/createDt/:createDt', (req,res)=>{
    Age.find({createDt: req.params.createDt}, (err, ages)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!ages) return res.status(404).send('내용 없음');
        res.status(200).send(ages);
    });
});

//날짜와 구분으로 조회
router.get('/:createDt/:gubun', (req,res)=>{
    Age.find({createDt: req.params.createDt, gubun: req.params.gubun},(err,ages)=>{
        if (err) return res.status(500).send('조회 실패');
        if (!ages) return res.status(404).send('내용 없음');
        res.status(200).send(ages);
    });
});



// //지역이름에서 날짜로 조회
// router.get('/:gubunEn/:createDt', (req,res)=>{
//     Local.find({gubunEn: req.params.gubunEn, createDt: req.params.createDt}, (err, locals)=>{
//         if (err) return res.status(500).send('조회 실패');
//         if (!locals) return res.status(404).send('내용 없음');
//         res.status(200).send(locals);
//     });
// });

module.exports = router;