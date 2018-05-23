/**
 * Created by Administrator on 2018/5/9.
 */

'use strict';

var pageName = 'weixin_robot';
var weixinApi = require("weixin-api");

var receiveMsgFromWeixin = require ('../weixin/receive_msg_from_weixin');
var sendMsgToWeixin = require ('../weixin/send_msg_to_weixin');
var apiTuling = require ('../robot/tuling');

var weixinRobot = function (){

    this.responMsg = function (msg,msgCallback){



        switch (msg.MsgType) {
            case 'text':

                var content = msg.Content;
                var weixinPublic = msg.ToUserName;
                var userIdName = msg.FromUserName;

                break;
            case 'image':
                //TODO

                break;
            case 'voice':
                //TODO

                break;



        };

        var options=  {
            "apiKey" : "e4e08954a08040949c1f51932d7ab51a",
            "userId" : "menghuiqiang",
            "groupId" : weixinPublic,
            "userIdName" : userIdName
        };
        // Send message to Tuling robot , and return callback.
        apiTuling (content,options,function(callback){
            // callback is json
            // text {resultType:'text',content:'...'}
            // image {resultType:'image' , imageUrl : 'http://....'}
            console.log (pageName + ':callback:' + JSON.stringify(callback) );

            msgCallback(callback);


        })
    };




};

module.exports= new weixinRobot;


