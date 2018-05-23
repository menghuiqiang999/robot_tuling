/**
 * Created by Administrator on 2018/4/27.
 */

"use strict";
var pageName = 'post_buffer';


/**
 *
 * @param host - Such as  qyapi.weixin.qq.com
 * @param uri - Such as /cgi-bin/uer/get?access_token=ACCESS_TOKEN ......
 * @param content
 * @param data_callback
 * @example
 * post (host,uri,content,function(err,result){
 *      ......
 * });
 *
 */
var post = function (host, uri, content,data_callback) {
    var b = Buffer.from(content,'utf8');
    var https = require('https');
    var options = {
        hostname: host,
        port: 443,
        path: uri,
        method: "POST",
        headers: {
            "Content-Type" : "application/x-www-form-urlencoded; charset = UTF-8 " ,
            "Content-Length" : b.length
        }
    };

    var data = "" ;
    var req = https.request(options, function (res) {
            res.on ('data', function (chunk) {
            console.log('BODY: ' + chunk) ;
            data += chunk ;

        });
        res.on('end',function(){
            data_callback (null,data) ;
        })
    });
    req.write(b) ;
    req.end() ;
};
module.exports = post;
