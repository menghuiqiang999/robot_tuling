/**
 * Created by Administrator on 2018/5/12.
 */
'use strict';
var pageName = 'test2';
var verifyUrl = require ('./lib/verify_url');



var corpId = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
//var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录
var corpSecret="wE12G6DxXXDGI71khHpEaOBBRulpX4hqwCqBDkOLTM8"; //机器人
var token = 'moonlight';var corpId = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
//var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录
var corpSecret="wE12G6DxXXDGI71khHpEaOBBRulpX4hqwCqBDkOLTM8"; //机器人
var token = 'moonlight';
//var encodingAESKey = 'DpNwAtixaHQdh1IXTfQdP9c9dBYxUyfCsD1yY2GT3qE';
var encodingAesKey = 'tu11ooBABHM7AToEQkEyYsKKOyHvvahhWROnyrPXlUC';


var corpInfo = {
    corpId : corpId ,
    token :token ,
    encodingAesKey : encodingAesKey
};

var msg_signature='5b507d81ef0bea14c051bc644a5d11ed3f1cf669';
//                    5b507d81ef0bea14c051bc644a5d11ed3f1cf669

var timestamp=1526084034;
var nonce=1526201506;
//var echostr = 'Q3Z1hAmsPLk0v15+H9mdhIYmKZjtTOde6HCUj91tmqMv+F6fZtGvMeNecrdygyalV/uKzsgYqDUejyDpZVPIIQ==';
var echostr = 'jHMzSPr7t5FlCtdjHN3UcKo+Y1nBclaCSWpVsZr3QFNvHYwmDxxhnvCIKlUj13Scw8AA5mCy9IKK4as00ikWMQ==';



var req = {"query" : {

            "msg_signature" : msg_signature ,
            "timestamp" : timestamp ,
            "nonce" : nonce ,
             "echostr" :echostr
            }
};

verifyUrl(req,corpInfo,function(err,result){
    console.log (pageName + ":result:" + JSON.stringify(result));
});
//msg_signature=2f8b010dfbaa360f53c720a9e07f0b0da9f05c46
//&timestamp=1526089925&nonce=1526240136
//&echostr=K0bpHnxdXnt%2FP%2F1whZR%2BI3Ej46b78J1Bqg%2B07c8rEc%2FaD%2Bsw3ukNu5uzBMVmDBZoQokIg5CPSQ%2FFQKR%2FBm9rJw%3D%3D