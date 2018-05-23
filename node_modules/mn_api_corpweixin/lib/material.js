/**
 * Created by Administrator on 2018/5/22.
 */
'use strict' ;
var pageName = 'material' ;

var material = function () {};
module.exports = material;
var com = require('mn_fun_comm');

var uploadFile = com.http.file.upload;

var lib = require('./lib');

material.upload = function (corpInfo,type,filePathName,fileUploadName,callback) {

    var corpId = corpInfo.corpId ;
    var corpSecret = corpInfo.corpSecret ;
    var getAccessToken = lib.getAccessToken;
    getAccessToken (corpId,corpSecret,function(err,accessToken){

        var host = 'qyapi.weixin.qq.com' ;
        var path = '/cgi-bin/media/upload?access_token=' + accessToken  + '&type=' + type ;

        var url= 'https://' + host + path ;

        uploadFile (url,type,filePathName,fileUploadName,callback);

    });

} ;