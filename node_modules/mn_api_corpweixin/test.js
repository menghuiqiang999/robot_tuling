/**
 * Created by Administrator on 2018/4/25.
 * process:
 * 1,get token
 * 2,indentify user
 * 3,receive msg from user
 * 4,send it to robot and return callback
 * 5,send callback to user.
 *
 * @module test  To msg Tuling robot
 *
 */
"use strict";
var pageName="test";


//----------------------------------------------------------------------------------------------------------------------
// Test verifyUrl
var corpweixin = require ('./corpweixin');
var receiveMsg = corpweixin.receiveMsg;


var corpId = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
//var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录
var corpSecret="wE12G6DxXXDGI71khHpEaOBBRulpX4hqwCqBDkOLTM8"; //机器人
var token = 'moonlight';

var encodingAesKey = 'tu11ooBABHM7AToEQkEyYsKKOyHvvahhWROnyrPXlUC';

/*
var msg_signature='5b507d81ef0bea14c051bc644a5d11ed3f1cf669';
//                    5b507d81ef0bea14c051bc644a5d11ed3f1cf669
/*
var timestamp=1526084034;
var nonce=1526201506;
//var echostr = 'Q3Z1hAmsPLk0v15+H9mdhIYmKZjtTOde6HCUj91tmqMv+F6fZtGvMeNecrdygyalV/uKzsgYqDUejyDpZVPIIQ==';
var echostr = 'jHMzSPr7t5FlCtdjHN3UcKo+Y1nBclaCSWpVsZr3QFNvHYwmDxxhnvCIKlUj13Scw8AA5mCy9IKK4as00ikWMQ==';
*/
//msg_signature=8928518daeb2b5074c84cc462c3aaa817d6bd13b&timestamp=1526446891&nonce=1525930334

var msg_signature = '8928518daeb2b5074c84cc462c3aaa817d6bd13b';
var timestamp = 1526446891;
var nonce = 1525930334;

var corpInfo = {
    corpId : corpId ,
    corpSecret :corpSecret ,
    token : token ,
    encodingAesKey :encodingAesKey
};

var reqInfo = {
    signature : msg_signature ,
    timestamp :timestamp ,
    nonce : nonce
};

//----------------------------------------------------------------------------------------------------------------------
//test receiveMsg.verifyUrl
/*
var encrypted = echostr;


receiveMsg.verifyUrl(corpInfo,reqInfo,encrypted,function(err,sReply){
    console.log(pageName,':sReply:',sReply);
});
*/
//----------------------------------------------------------------------------------------------------------------------

// Test receiveMsg.receiveMsg

var postData ='<xml><ToUserName><![CDATA[wwf54870d97f9ee496]]></ToUserName><Encrypt><![CDATA[zHD7+S8uKPnGJOVfr20FzWp8CFq+L0/3UB7u7D2pFVe+zLeNDyQ1436oX0Ub88V8qgQHcwZBJMAVmh+6Da+6RWFnRnOwkUXgObRbFLX9F8y2E641fo1OYPnCWUVLggI4HTvyh4RTHRaeth7YifctKuFny5v59TyalUYg26jORfa76mxbNMpROI76cjVUvAY0VjIP0ZrxRbDnJEsWxz1O/3DH3Gt2GjXmmUdIZMUSExnye6gmiGy9/w9u3NYzzttT+wXpqvBNuAzDd9PiFj+gbNJYNqj1A4/yWksxiodNV7Ny1ia/C4aHNk+CsaIb4plqZtz8cWr/v+gl8lvNC5ajrTrXh5phmCrtouuxlEdjFd3F/OtxWbuWFiEyv3ifIkrqyw1OjmSeoRikOjMgxyWjaMSCX87A1/MunWcVjLB/9V8=]]></Encrypt><AgentID><![CDATA[1000004]]></AgentID></xml>';
receiveMsg.receiveMsg(corpInfo,reqInfo,postData,function(err,sReply){
    console.log(pageName , ':sReply:' , sReply);
});


//----------------------------------------------------------------------------------------------------------------------
//Test receiveMsg.responsed
var msg = '<xml><ToUserName><![CDATA[wwf54870d97f9ee496]]></ToUserName><FromUserName><![CDATA[MengHuiQiang]]></FromUserName><CreateTime>1526446891</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[好的]]></Content><MsgId>940564059</MsgId><AgentID>1000004</AgentID></xml>';

receiveMsg.responsed(msg,corpInfo,reqInfo,function(err,xml){
    if (err) {
        return;
    }
    console.log(pageName, ':xml:' + xml);
});