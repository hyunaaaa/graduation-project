const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended:true }));
const News = require('../schemas/news');

//전체 조회
router.get('/', function(req, res) {
    News.find( {}, function(err, newss) {
        if (err) return res.status(500).send('조회 실패');
        res.status(200).send(newss);
    }).sort({'$natural':-1}).limit(200);
});

router.get('/:title', (req,res)=>{
    let para = '^'+decodeURIComponent(req.query.title)+'^';
    News.find({title: {'$regex':para}},(err,newss)=>{
        
        if (err) return res.status(500).send('조회 실패');
        if (!newss) return res.status(404).send('내용 없음');
        res.status(200).send(newss);
    });
});

// router.get('/:title', (req,res)=>{
//     let para = decodeURIComponent(req.query.title);
//     News.find({'$text': {'$search':para}},(err,newss)=>{
//         if (err) return res.status(500).send('조회 실패');
//         if (!newss) return res.status(404).send('내용 없음');
//         res.status(200).send(newss);
//     });
// });

//검색어 조회
// router.get('/searchpost', (req,res)=>{
//     let options=[]
//     if(req.query.option=='title'){
//         options=[{title: new RegExp(req.query.content)}]
//     }else if(req.query.option=='content'){
//         options=[{content: new RegExp(req.query.content)}]
//     }else if(req.query.option=='title+content'){
//         options=[
//             {title: new RegExp(req.query.content)},
//             {content: new RegExp(req.query.content)},
//         ]
//     }
//     News.find({$or:options}, (err, newss)=>{
//         if (err) return res.status(500).send('조회 실패');
//         if (!newss) return res.status(404).send('내용 없음');
//         res.status(200).send(newss);
//     });
// });

module.exports = router;