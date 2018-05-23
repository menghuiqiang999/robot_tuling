/**
 * Created by Administrator on 2018/5/18.
 */
'use strict';
var pageName = 'test6';


const corpweixin = require ('./corpweixin');
const sendMsg = corpweixin.sendMsg;


const querystring = require ('querystring');



var corpId = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
//var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录
var corpSecret="wE12G6DxXXDGI71khHpEaOBBRulpX4hqwCqBDkOLTM8"; //机器人
var token = 'moonlight';

var encodingAesKey = 'tu11ooBABHM7AToEQkEyYsKKOyHvvahhWROnyrPXlUC';


var corpInfo = {
    corpId : corpId ,
    corpSecret : corpSecret ,
    token : token ,
    encodingAesKey : encodingAesKey
};
var content1 = '好好学习,天天向上，这会是可以了';
//var content = querystring.stringify('aaaaa好好') ;
 //var content = encodeURIComponent(content1);
//var content = decodeURIComponent(content1);
var content = content1;
//console.log (pageName, ':input content:', content);
/*
var postData = {
    "touser"  : "MengHuiQiang" ,
    "toparty" : 1 ,
    "msgtype" : "text" ,
    "agentid" : 1000004 ,
    "text" : { content : content  }
};
*/

var mediaId = '3a-7dvmwwcZg1TGHTMGNjeWWw2HLQvj4Vqktu-KwFAr7Ylf945wdWuwoYqkWWM5Ys';
var postData = {
    "touser"  : "MengHuiQiang" ,
    "toparty" : 1 ,
    "msgtype" : "image" ,
    "agentid" : 1000004 ,
    "image" : { "media_id" : mediaId}

};


var contentData = JSON.stringify(postData) ;
//var contentData = '{ "touser"  : "MengHuiQiang" , "toparty" : 1 ,  "msgtype" : "text" , "agentid" : 1000004 , "text" : { content : "好好学习" } }';
//var contentData = querystring.stringify(postData ,';' ,'=' );
//var contentData = querystring.stringify(postData);
//var contentData = encodeURIComponent(postData);
//console.log(pageName, ':contentData:', contentData);




sendMsg(corpInfo,contentData);