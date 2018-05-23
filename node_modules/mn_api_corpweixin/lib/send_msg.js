/**
 * Created by Administrator on 2018/5/18.
 */
'use strict';

var pageName = 'send_msg ';
var com = require ('mn_fun_comm');
var lib = require ('./lib') ;
var getAccessToken = lib.getAccessToken;

var post = com.https.postBuffer;


var sendMsg = function(corpInfo , content) {
    var corpId = corpInfo.corpId ;
    var corpSecret = corpInfo.corpSecret ;
    getAccessToken (corpId,corpSecret,function(err,accessToken){

        var host = 'qyapi.weixin.qq.com';
        var path = '/cgi-bin/message/send?access_token=' + accessToken ;
        //console.log (pageName , ':content:' , content);
        post (host,path,content,function(err,callback){
            //console.log (pageName , ':result:' , callback);
        });

    });

};



module.exports = sendMsg;

