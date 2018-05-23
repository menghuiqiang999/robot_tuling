/**
 * Created by Administrator on 2018/5/9.
 */


'use strict';
var pageName = 'send_msg_to_weixin in weixin';

var weixinApi = require("weixin-api");


var sendMsgToWeixin = function (content,fromUserName,toUserName){


    var resMsg = {
        fromUserName : fromUserName,
        toUserName : toUserName,
        msgType : "text",
        //content : content,
        content : content,
        funcFlag : 0
    };
    console.log (pageName + ':resMsg:' + JSON.stringify(resMsg));
    weixinApi.sendMsg(resMsg);
};

module.exports = sendMsgToWeixin;

