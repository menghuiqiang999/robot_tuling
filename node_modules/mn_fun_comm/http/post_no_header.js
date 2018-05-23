/**
 * Created by Administrator on 2018/4/27.
 */

'use strict';
var pageName = 'post_no_header in http';
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


    var http = require('http');
    var options = {
        hostname: host,
        port: 80 ,
        path: uri,
        method: 'POST'
    };
    var data = "" ;
    var req = http.request(options, function (res) {
        res.on ('data', function (chunk) {
            console.log('BODY: ' + chunk) ;
            data += chunk ;
        });
        res.on('end',function(){
            data_callback (null,data) ;
        });
    });
    req.write(content) ;
    req.end() ;
};
module.exports = post;
