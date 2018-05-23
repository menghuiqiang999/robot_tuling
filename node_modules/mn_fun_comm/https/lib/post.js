/**
 * Created by Administrator on 2018/4/27.
 */

"use strict";
var page_name="post in https of mn_fun_common";

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


    var https = require('https');
    var options = {
        hostname: host,
        port: 443,
        path: uri,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Content-Length': content.length
        }
    };

    var data = "" ;
    var req = https.request(options, function (res) {
        console.log(page_name+':STATUS: ' + res.statusCode) ;
        console.log(page_name+':HEADERS: ' + JSON.stringify(res.headers)) ;
        //console.log('BODY: ' + res.body);
        //res.setEncoding('utf8');
        res.on ('data', function (chunk) {
            console.log('BODY: ' + chunk) ;
            data += chunk ;

        });
        res.on('end',function(){
            data_callback (null,data) ;
        })
    });
    req.write(content) ;
    req.end() ;

};
module.exports = post;
