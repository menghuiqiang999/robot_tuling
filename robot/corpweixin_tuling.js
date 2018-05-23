/**
 * Created by Administrator on 2018/5/20.
 */

'use strict';

var pageName = 'corpweixin_tuling' ;

var corpweixin = require ('mn_api_corpweixin');
var com = require ('mn_fun_comm');


var corpweixinTuling = function (corpInfo,xmlJson ) {
    // Corpweixin info
    var deptIdCorpweixin = 1 ;
    var agentIdCorpweixin = 1000004 ;


    //Tuling user Info

    // msg from corpweixin
    var xml = xmlJson.xml;
    var toUserName = xml.ToUserName[0] ;
    var fromUserName = xml.FromUserName[0] ;
    var msgType = xml.MsgType[0] ;

    //Tuling info
    var apiKeyTuling = 'e4e08954a08040949c1f51932d7ab51a';
    var userIdTuling = fromUserName;

    var optionsTuling=  {
        "apiKey" : apiKeyTuling ,
        "userId" : userIdTuling
        //"groupId" : toUserName,
        //"userIdName" : fromUserName
    };


    switch (msgType) {
        case 'text':

            var content = xml.Content[0];
            var postDataTuling = {
                inputText : { text : content  }

            };
            break;

        case  'image':
            var picUrl = xml.PicUrl[0] ;
            var postDataTuling = {
                inputImage : { url : picUrl }

            };

            break;
        case 'voice':

            break;
        case 'video':


            break;

        case  'location':

            break;
        case 'link':

            break;


    };
    if (postDataTuling) {
        var composeData = {
            reqType : 0 ,
            perception : postDataTuling ,
            userInfo :optionsTuling
        };
        var content = JSON.stringify(composeData);


    }
    else{

        return;
    };



    var postToRobot = require ('mn_api_tuling');

    postToRobot(content,function(err,result){
        if (err) {
            return;
        };
        //console.log(pageName,':result:',result);
        var value = parseData(result);
        if (value == 'err') {
            return;
        };
        if (value.text) {
            //var text = value.text;
            //console.log(pageName , ':text:' , text);
            var postDataCorpweixin = {
                "touser"  : fromUserName ,
               // "toparty" : deptIdCorpweixin ,
                "msgtype" : "text" ,
                "agentid" : agentIdCorpweixin ,
                "text" : { content : value.text  }
            };
            var contentData = JSON.stringify(postDataCorpweixin) ;
            corpweixin.sendMsg(corpInfo ,contentData);
        };
        if (value.image) {
            var urlImage = value.image;

            downUploadImage(corpInfo,urlImage,function(err,mediaId){
                if (err) {
                    return ;
                };
                console.log ('Enter here! ' ,mediaId);
                 var postDataCorpweixin = {
                     "touser"  : fromUserName ,
                     //"toparty" : deptIdCorpweixin ,
                     "msgtype" : "image" ,
                     "agentid" : agentIdCorpweixin ,
                     "image" : { media_id : mediaId  }
                 };
                var contentData = JSON.stringify(postDataCorpweixin) ;
                console.log(pageName ,':contentData:' ,contentData);
                corpweixin.sendMsg(corpInfo ,contentData);
            });
        } ;
        if (value.url) {

            return;
            //var url = value.url;
            //console.log (pageName , ':url:' , url);
        };






    });




};



module.exports = corpweixinTuling;

function downUploadImage(corpInfo , urlImage , mediaIdCallback){
    var downloadFile = com.http.file.downloadFile;
    var dir= './';
    var sha1= com.crypto.sha.sha1;
    var path = require('path');
    var extname = path.extname(urlImage);
    var fileName= sha1(urlImage) + extname;
    var uploadFile = corpweixin.material.upload;
    downloadFile(urlImage,dir,fileName,function(err,result){
        if (err){
            return resCallback(err);
        };
        if (result) {
            //material.upload = function (corpId,type,filePathName,fileUploadName,callback) {}
            var type = 'image';
            var filePathName = dir + fileName;
            var fileUploadName = fileName;
            uploadFile(corpInfo,type,filePathName,fileUploadName,function(err,result) {
                if (err) {
                    return mediaIdCallback(err);
                };
                var resultJson = JSON.parse(result);
                if (resultJson.errcode===0) {
                    var mediaId = resultJson.media_id ;
                    console.log( pageName , ':media_id:', mediaId );
                    mediaIdCallback(null,mediaId);

                };
                console.log(pageName, ':true:', result);
            });
        };
    });
};


//----------------------------------------------------------------------------------------------------------------------
function parseData (data) {
    var d = JSON.parse(data);
    if (d.intent.code > 10000) {
        var results =  d.results;
        var value = {};
        for (var i = 0 ; i < results.length; i ++ ) {
            var result = JSON.parse(data).results[i] ;
            var resultType = result.resultType;
            switch (resultType) {
                case 'text' :
                    var text = result.values.text ;
                    value.text = text ;
                    console.log(pageName,':text:' , text);
                    break;
                case  'image' :
                    var image = result.values.image ;
                    value.image = image ;
                    console.log(pageName,':image:' , image);
                    break;
                case 'url':
                    var url =result.values.url;
                    value.url = url;
                    break;
            };
        };
        return value;
    }
    else {
        return 'err';
    };

};