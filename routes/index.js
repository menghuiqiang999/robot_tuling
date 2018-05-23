/*  注释原先的程序
var express = require('express');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
// 原先的程序结束
*/

var express = require('express');
var router = express.Router();
var weixinApi = require('weixin-api');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// 接入验证
router.get('/', function(req, res) {
    // 签名成功
    if (weixinApi.checkSignature(req)) {
        res.status(200).send(req.query.echostr);
    } else {
        res.status(200).send('fail');
    }
});

//监听post路由为/的所有请求
router.post('/', function(req, res) {

    // loop
    weixinApi.loop(req, res);

});

module.exports = router;