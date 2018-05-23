/**
 * Created by Administrator on 2018/5/9.
 */
'use strict';
var pageName = 'robot of robot_tuling';

var express = require('express');
var router = express.Router();


var wechat = require('wechat');



var receiveMsgFromWeixin = require ('../weixin/receive_msg_from_weixin');
var sendMsgToWeixin = require ('../weixin/send_msg_to_weixin');
var apiTuling = require ('../robot/tuling');

var weixinRobot = require ('../weixin/weixin_robot');

var weixinConfig = require('../weixin/weixin_config');
weixinConfig(function(config){

    router.use(express.query());
    router.use('/', wechat(config, function (req, res, next) {
        // 微信输入信息都在req.weixin上
        var msg = req.weixin;
        console.log (pageName + ':msg:' + JSON.stringify(msg));

        /**  msg
         *   format: json
         *   1,text message field: ToUseerName , FromUserName , CreateTime ,MsyType :"text" , Content ,MsgId
         *      Sample:
         *      msg:{"ToUserName":"gh_5027710d2fa7","FromUserName":"odWFQwaYpaIK_dqLNh0BwB2YxED8",
         *          "CreateTime":"1525925728","MsgType":"text","Content":"看","MsgId":"6553801098320073248"}
         *   2,image message field: ToUserName , FromUserName , CreateTime , MsgType : "image" ,PicUrl , MsgId ,MediaId
         *      Sample:
         *      msg:{"ToUserName":"gh_5027710d2fa7","FromUserName":"odWFQwaYpaIK_dqLNh0BwB2YxED8",
         *      "CreateTime":"1525926102","MsgType":"image",
         *      "PicUrl":"http://mmbiz.qpic.cn/mmbiz_jpg/qicq6I4CRwLic179qkEfhlsWXPX
         *      rBzN37KBsgZJZm21kDqJAU4FOdicvia4D92SwicOxicbecU0P31vUxO0V4Pd7Fkjw/0",
         *      "MsgId":"6553802704637842067",
         *      "MediaId":"8Y_Cv-zm1nDdYcftuwasouSpiho_Vj6w7GzBVhoW_8UfbVZNq-PUX3fY6FHRUO9m"}
         *
         *   3,voice message field: ToUserName , FromUserName , CreateTime ,MsgType : "voice" ,MediaId , Format ,Msgid,
         *      Recognition         *
         *      Sample
         *      msg:{"ToUserName":"gh_5027710d2fa7","FromUserName":"odWFQwaYpaIK_dqLNh0BwB2YxED8",
         *      "CreateTime":"1525926419","MsgType":"voice",
         *      "MediaId":"3tg_GN5VF1DDwOkTdh5ITbTzNnjU0zDAWfd41IvAE0pB1Mg1d5G5S5QGOzOynV6t",
         *      "Format":"amr","MsgId":"6553804066142475019","Recognition":""}
         *   4,location message field : ToUserName , FromUserName , CreateTime , MsgType : location , Location_X ,
         *      Location_Y , Scale ,Label , MsgId
         *      Sample:
         *      msg:{"ToUserName":"gh_5027710d2fa7","FromUserName":"odWFQwaYpaIK_dqLNh0BwB2YxED8",
         *      "CreateTime":"1525927007","MsgType":"location",
         *      "Location_X":"22.529661","Location_Y":"113.928040","Scale":"16",
         *      "Label":"深圳(南山)中加学校","MsgId":"6553806591583245236"}
         *
         *    5,link message field : ToUserName , FromUserName , CreateTime , MsgType ,"link" , Title , Description ,
         *      Url , MsgId
         *      Sample:
         *      msg:{"ToUserName":"gh_5027710d2fa7","FromUserName":"odWFQwaYpaIK_dqLNh0BwB2YxED8",
         *      "CreateTime":"1525927217","MsgType":"link","Title":"一首传唱900年的圣诗，大...",
         *      "Description":"O come, O come, EmmanuelAnd",
         *      "Url":"http://mp.weixin.qq.com/...#rd","MsgId":"6553807493526377473"}
         *
         *    6,file message field :ToUserName ,FromUserName ,CreateTime , MsgType : "file" ,Title, description ,
         *      FileKey , FileMd5 , FileTotalLen , MsgId
         *      Sample:
         *      msg:{"ToUserName":"gh_5027710d2fa7","FromUserName":"odWFQwaYpaIK_dqLNh0BwB2YxED8",
         *      "CreateTime":"1525927523","MsgType":"file","Title":"乌镇学习会日程.pdf","Description":"199.5 KB",
         *      "FileKey":"AQAAAAAAAADz19g/","FileMd5":"3949625dc03df5c9a05cd16c4185ab0b",
         *      "FileTotalLen":"204279","MsgId":"6553808807786370119"}
         *
         *
         *
         */

        weixinRobot.responMsg(msg,function(msgCallback){
            console.log (pageName + ':msgCallback:' + JSON.stringify(msgCallback) );
            switch (msgCallback.resultType) {
                case 'text':
                    res.reply({type: "text", content: msgCallback.content });
                    break;
                case 'image':
                    res.reply({
                        type: "image",
                        content: {
                            picurl:msgCallback.picUrl

                        }
                    });
                    break;


            };


        });

    }));




});



module.exports = router;




