/**
 * Created by Administrator on 2018/5/10.
 */

'use strict';
var pageName = 'corpweixin_robot';


var express = require('express');
var router = express.Router();
const querystring = require ('querystring');
const corpweixin = require ('mn_api_corpweixin');
const tuling = require ('../robot/tuling');
const com = require ('mn_fun_comm');
const xml2json = com.xml.xml2json;



var corpId = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
//var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录
var corpSecret="wE12G6DxXXDGI71khHpEaOBBRulpX4hqwCqBDkOLTM8"; //机器人
var token = 'moonlight';
//var encodingAESKey = 'DpNwAtixaHQdh1IXTfQdP9c9dBYxUyfCsD1yY2GT3qE';
var encodingAesKey = 'tu11ooBABHM7AToEQkEyYsKKOyHvvahhWROnyrPXlUC';


var corpInfo = {
    corpId : corpId ,
    corpSecret :corpSecret ,
    token :token ,
    encodingAesKey : encodingAesKey
};
/**
 * receive data from method post.
 * @param req
 * @parma callback  - callback function
 * @return body
 * @example
 * receivePostData(req,function(callback){
 *     ......
 * });
 */
var receivePostData = function (req,callback){

    //暂存请求体信息
    var body = "";
    //每当接收到请求体数据，累加到post中
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        //console.log("chunk:",chunk);
    });

    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function () {
        // 解析参数
        //body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        //console.log("body:",body);
        callback(body);
    });
};



/**
 *
 * @param xml - xml from corpweixn
 * @return xmljson -  such as {"xml":{"ToUserName":["wwf54870d97f9ee496"],"AgentID":["1000004"]}}
 * @example
 * xml2json(body,funciotn(){
 *      ......
 * });
 */
/*
var xml2json=function(xml,callback){

    console.log('xml',xml);
    var parseString = require('xml2js').parseString;

    parseString(xml, function (err, result) {
        if (err) {
            console.log(pageName,'There is an error form parseString in xml2json of corpweixin_robot');
        };
        console.log (JSON.stringify(result));
        callback(result);
    });

};

*/
router.get('/', function(req, res) {
    //Identify the query of req
    var signature =req.query.msg_signature;
    var timestamp =req.query.timestamp;
    var nonce= req.query.nonce;
    var echostr = req.query.echostr;
    console.log (pageName + ':req.query:' + signature + ':' + timestamp + ':'+ nonce + ':' +echostr);
    var reqInfo = {
        signature : signature ,
        timestamp : timestamp ,
        nonce : nonce
    };
    var encrypted = echostr;
    const verifyUrl=corpweixin.receiveMsg.verifyUrl;

    verifyUrl(corpInfo ,reqInfo,encrypted ,function(err,result){
        if (err) {
            console.log(pageName + ':There is an error from verifyUrl!');
            return;
        };
        console.log (pageName + ':callback is OK!');
        console.log (pageName + ":result:" + JSON.stringify(result));
        var msg = result;
        console.log (pageName + ':msg: ' + msg + ':length:' + msg.length);
        res.send ( msg );
    
    });
});



router.post('/', function(req, res) {

    var signature = req.query.msg_signature;
    var timestamp = req.query.timestamp;
    var nonce = req.query.nonce;
    console.log (pageName , ':req.query:' , JSON.stringify(req.query));
    var reqInfo = {
        signature : signature ,
        timestamp : timestamp ,
        nonce : nonce
    };
    receivePostData(req,function(bodyCallback){
        var receiveMsg = corpweixin.receiveMsg.receiveMsg ;

        receiveMsg(corpInfo,reqInfo,bodyCallback,function(err,sReply){

            corpweixin.receiveMsg.responsed(sReply,corpInfo,reqInfo,function(err,resDataCallback){
                //console.log (pageName, ':resDataCallback:' , resDataCallback);
                res.send(resDataCallback);
            });

            //console.log(pageName , ':sRelpy:' ,sReply);
            xml2json(sReply ,function(err,xmlCallback){
                if (err) {return};
                console.log (pageName , ':xmCallback:' , xmlCallback);

                var corpweixinTuling = require ('../robot/corpweixin_tuling') ;
                corpweixinTuling(corpInfo,xmlCallback);
                /*
                var xml = xmlCallback.xml;
                var toUserName = xml.ToUserName[0] ;
                var fromUserName = xml.FromUserName[0] ;
                var msgType = xml.MsgType[0] ;
                var content = xml.Content[0] ;
                console.log (pageName , ':xml:' , toUserName ,fromUserName ,msgType ,content);
                tuling(toUserName,fromUserName,content,function(value){
                    console.log (pageName, ':value:' ,value.text);
                    var postData = {
                        "touser"  : fromUserName ,
                        "toparty" : 1 ,
                        "msgtype" : "text" ,
                        "agentid" : 1000004 ,
                        "text" : { content : value.text  }
                    };
                    var contentData = JSON.stringify(postData) ;
                    corpweixin.sendMsg(corpInfo ,contentData);
                });
                */
            });
        });



    });
    // http://turing-chat.oss.tuling123.com/ef639ff694b75cf6b56f55574777c4e4.jpg
   

});

module.exports = router;