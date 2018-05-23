/**
 * Created by Administrator on 2017/3/29.
 */
var http=require("http");
var querystring=require('querystring');
var weixinApi = require("weixin-api");

function WeiXin(){


    this.initMsg = function () {
        // config 根据自己的实际配置填写
        weixinApi.token = 'moonlight';
    };
    //响应用户消息
    this.responseMsg = function () {

        //响应用户文本消息
        resTextMsg();
    }

}

//响应用户文本消息
function resTextMsg() {

    //文本消息
    weixinApi.textMsg(function(msg){
        //console.log("响应用户文本消息");
        //console.log(JSON.stringify(msg));
        var content = "消息内容："+ msg.content+"\n";
        content = content + "toUserName:" + msg.toUserName + "\n";
        content = content + "fromUserName:" + msg.fromUserName + "\n";

        weixinSendToRobot(msg.content,msg.fromUserName,msg.toUserName);

        console.log('test');


    });
}

//从微信端发给图灵机器人
function weixinSendToRobot(info,userid,weixinPublic){
    var post_data = querystring.stringify({
        key: 'e4e08954a08040949c1f51932d7ab51a',
        info:info,
        userid: userid
    });
    var options = {
        host: 'www.tuling123.com',
        port: 80,
        path: '/openapi/api',
        method: 'POST',
        rejectUnauthorized: false,
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded'  //这个一定要有
        }
    };
    var text;
    var req = http.request(options, function (res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
            var jsonChunk=JSON.parse(chunk);
            console.log(jsonChunk);
            text=jsonChunk.text;
            console.log(text);
            weixinSendMsg(weixinPublic,userid,text);
        });
        console.log(text);
    });
    req.write(post_data);
    req.end();
    console.log(text);

}



// 从微信端发信息到客户端
function weixinSendMsg(fromUserName,toUserName,text){

    var resMsg = {};
    resMsg = {
        fromUserName : fromUserName,
        toUserName : toUserName,
        msgType : "text",
        //content : content,
        content : text,
        funcFlag : 0
    };
    weixinApi.sendMsg(resMsg);
}

//获取百度图灵机器人API服务

function turingApi(text) {


    var post_data = querystring.stringify({
        key: 'e4e08954a08040949c1f51932d7ab51a',
        info: 'text'
       // userid: resMsg.toUserName
    });

    var options = {
        host: 'www.tuling123.com',
        port: 80,
        path: '/openapi/api',
        method: 'POST',
        rejectUnauthorized: false,
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded', //这个一定要有
         }
    };

    var req = http.request(options, function (res) {
        //console.log('STATUS: ' + res.statusCode);
        //console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            //console.log('BODY: ' + chunk);
            console.log("测试");
        });
    });
    req.write(post_data);
    req.end();

    //console.log(req.text);
    //getResult(req);
    console.log("开始");
    //console.log(getResult);
    console.log("结束");

    return req;
}


/**
 * https/http post请求
 * @param url
 * @param data
 * @param fn
 */
function myHttpPost(url,data,fn){
    data=data||{};
    //var content=require('querystring').stringify(data);
    var content=JSON.stringify(data);
    var parse_u=require('url').parse(url,true);
    console.log(content);
    var isHttp=parse_u.protocol=='http:';
    var options={
        host:parse_u.hostname,
        port:parse_u.port||(isHttp?80:443),
        path:parse_u.path,
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Content-Length':Buffer.byteLength(content,'utf8')
        }
    };
    var req = require(isHttp?'http':'https').request(options,function(res){
        var _data='';
        res.on('data', function(chunk){
            _data += chunk;
        });
        res.on('end', function(){
            fn!=undefined && fn(_data);
        });
    });
    req.write(content);
    req.end();
}

/**
 * https/http get请求
 * @param url:url地址(若参数有中文，需使用encodeURI(url)转码)
 * @param header:请求头
 * @param fn:回调函数得出结果
 */
function myHttpGet(url,header,fn){
    var parse_u=require('url').parse(url,true);
    var isHttp=parse_u.protocol=='http:';
    var options={
        host:parse_u.hostname,
        port:parse_u.port||(isHttp?80:443),
        path:parse_u.path,
        method:'GET',
        headers:header
    };

    require(isHttp?'http':'https').get(options,function(res){
        var _data='';
        res.on('data', function(chunk){
            _data += chunk;
        });
        res.on('end', function(){
            fn!=undefined && fn(_data);
        });
    });
}




module.exports = new WeiXin();