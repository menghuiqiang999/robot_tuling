/**
 * Created by Administrator on 2018/5/21.
 */
'use strict';

var pageName = 'test1';

var com=require('./com');

//----------------------------------------------------------------------------------------------------------------------
// Test http file

var uploadFile = com.http.file.upload;



var accessToken='SYda0LbXHh_JzqnFyRVftJAiOvmPq3aCsH60I4JE2bvu7ASvXVrsNFZQHeSIPmwrKTfvHBthaUUgKwWRIwX113CiG0mqqxK8lJQNWUITxAqbZ5AGsWgGgmwwgsA9KOwm4FZ2zNpD7GE4D2pwKwpatUM9zPxzWpE6lwTP2CIkIy6LZmjl7fhMLUiCmVowkAZFjkAQahFKbNtW_HffKkwptg';
//上传成功！服务器结果： {"errcode":0,"errmsg":"ok","type":"image","media_id":"3VTyZhvPWo0A4C1eB_r_cQzs4BbCRmoqESN_jIVHmI71LNyWHtOPqcSl8r3SA63s3","created_at":"1526904727"}

var type = 'image';

var host = 'qyapi.weixin.qq.com' ;
var path = '/cgi-bin/media/upload?access_token=' + accessToken  + '&type=' +type ;
var url = 'https://' + host +path ;
var nameType = 'media';
var filePathName ='./9a4dba08f2232fb32b8d1235c1f0a3bfb9732c34.jpg';
var fileUploadName= '9a4dba08f2232fb32b8d1235c1f0a3bfb9732c34.jpg';
/*
uploadFile(url,nameType,filePathName, fileUploadName,function(err,res){
    if (err){
        return;
    }
    console.log(res);
});
*/
/*

var imagesUrl= 'http://turing-chat.oss.tuling123.com/ef639ff694b75cf6b56f55574777c4e4.jpg' ;
var downFile = com.http.file.download;
downFile(imagesUrl,'./','1.jpg');

*/
//----------------------------------------------------------------------------------------------------------------------
//Test downUpload

var imagesUrl= 'http://turing-chat.oss.tuling123.com/ef639ff694b75cf6b56f55574777c4e4.jpg' ;
var downUploadFile = com.http.file.downUpload;
var dir = './' ;
var fileName = '9a4dba08f2232fb32b8d1235c1f0a3bfb9732c34.jpg';

downUploadFile(imagesUrl,url,nameType,fileName,function(err,result){
    console.log(pageName, ':result:' ,result);
});

//file.downUpload = function (urlDownload,urlUpload,fieldName,dir,fileName) {
