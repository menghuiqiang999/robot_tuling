/**
 * Created by Administrator on 2018/5/9.
 * @module receive_msg_from_weixin
 * @param contentCallback - This is a callback function
 * @returns contentCallback - This is a callback function
 */
'use strict';
var pageName = 'receive_msg_from_weixin in weixin';



var wechat = require('wechat');

var weixinConfig = require('./weixin_config');


//响应用户文本消息
var receiveMsgFromWeixin = function (req) {
    var msg = req.weixin;
    console.log(pageName + ':message:' +msg );
};

module.exports = receiveMsgFromWeixin;

//----------------------------------------------------------------------------------------------------------------------



