/**
 * Created by Administrator on 2018/5/20.
 */
'use strict';

var pageName = 'send_media' ;

var com = require ('mn_fun_comm');
var lib = require ('./lib') ;
var getAccessToken = lib.getAccessToken;

var post = com.https.postBuffer;


var sendMedia = function(corpInfo ,type ,dir,fileName) {
    var corpId = corpInfo.corpId ;
    var corpSecret = corpInfo.corpSecret ;
    getAccessToken (corpId,corpSecret,function(err,accessToken){

        var host = 'qyapi.weixin.qq.com' ;
        var path = '/cgi-bin/media/upload?access_token=' + accessToken  + '&type=' +type ;

        //console.log (pageName , ':dir:' , dir, ':fileName:', fileName);

        upload( host , path,dir,fileName);
        //uploadFile(host,path,dir,fileName);

    });

};



module.exports = sendMedia;





function upload(host,path,dir,fileName){
    var fs = require ('fs');

    fs.stat(dir+fileName,function(err,stat){


        var request = require ('request');

        var formstream = require ('formstream');

        var form = formstream();

        form.file("media", dir+fileName , fileName ,stat.size);

        var url = 'https://' + host + path ;
        var req = request.post(url,{headers:form.headers()},function(err,httpsResponse,body){
            if (err) {
                return console.err('上传失败',err);
            }
            console.log('上传成功！服务器结果：', body);
        });
        form.pipe(req);

    });

};

