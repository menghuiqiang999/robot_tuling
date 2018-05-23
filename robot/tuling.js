/**
 * Created by Administrator on 2018/5/17.
 */

'use strict';
var pageName = 'tuling';


var tuling = function(weixinPublic,userIdName,content,valueCallback){
    var postToRobot = require ('mn_api_tuling');

    var options=  {
        "apiKey" : "e4e08954a08040949c1f51932d7ab51a",
        "userId" : "menghuiqiang",
        "groupId" : weixinPublic,
        "userIdName" : userIdName
    };

    var postData = {
        inputText : { text : content  } ,
        inputImage : { url : "http://m.image.so.com/i?q=%E6%8D%A2%E4%B8%AA"} ,
        inputMedia : {url : "http://m.image.so.com/i?q=%E6%8D%A2%E4%B8%AA"}
    };


    var composeData = {
        reqType : 0 ,
        perception : postData ,
        userInfo :options
    };
    var content = JSON.stringify(composeData);

    console.log(pageName , ':content:' , content , ':length:' , content.length);
    postToRobot(content,function(err,result){
        if (err) {
            return;
        };
        console.log(pageName,':result:',result);
        var value = parseData(result);
        if (value == 'err') {
            return;
        };
        if (value.text) {
            var text = value.text;
            console.log(pageName , ':text:' , text);
        };
        if (value.image) {
            var image = value.image;
            console.log(pageName , ':image:', image);
        } ;
        if (value.url) {
            var url = value.url;
            console.log (pageName , ':url:' , url);
        };
        valueCallback(value);
    });
};
module.exports = tuling ;


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
                    break;
                case  'image' :
                    var image = result.values.image ;
                    value.image = image ;
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
