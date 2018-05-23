/**
 * Created by Administrator on 2018/5/20.
 */
'use strict';
var pageName = 'test7';


const corpweixin = require ('./corpweixin');
const sendMedia = corpweixin.sendMedia;


const querystring = require ('querystring');

var com = require('mn_fun_comm');
var sha1 = com.crypto.sha.sha1;

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

var imagesUrl= 'http://turing-chat.oss.tuling123.com/ef639ff694b75cf6b56f55574777c4e4.jpg' ;
//var type = 'image' ;
var type  = 'image';

var host = 'turing-chat.oss.tuling123.com';
var path = '/ef639ff694b75cf6b56f55574777c4e4.jpg';
var dir = './public/images/';
var imageType = '.jpg';
var dir1 = './';





downloadImage(imagesUrl,dir,imageType,function(err,fn){
    sendMedia(corpInfo,type,dir,fn);
});




//----------------------------------------------------------------------------------------------------------------------


function downloadImage (imageUrl,dir,imageType,callback){
    var request = require('request');
    //var request = require('http').reqquest;
    var fs = require('fs');


    //采用request模块，向服务器发起一次请求，获取图片资源
    request.head(imageUrl,function(err,res,body){
        if(err){
            console.log(err);
        }
    });
    var imageFileName = sha1(imageUrl) + imageType ;
    request(imageUrl).pipe(fs.createWriteStream(dir + imageFileName));

    var fn = imageFileName;
    callback(null,fn);

};

