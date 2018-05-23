/**
 * Created by Administrator on 2018/4/25.
 */


"use strict";
var pageName = 'get in https of mn_fun';

/**
 *
 * @param host - such as  qyapi.weixin.qq.com
 * @param uri   - such as /cgi-bin/uer/get?access_token=ACCESS_TOKEN ......
 * @param data_callback
 * @example
 * get(host,uri,function(err,result){
 *      ......
 * });
 */

var get = function (host, uri,data_callback) {


    var https = require('https');
    var options = {
        hostname: host,
        port: 443,
        path: uri,
        method: 'GET'
    };
    var data="";

    var req = https.get(options, function (res) {
        //console.log('STATUS: ' + res.statusCode);
        //console.log('HEADERS: ' + JSON.stringify(res.headers));
        // res.setEncoding('utf8');
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on('end',function(){
            console.log(pageName + ":data:" + data);
            console.log(pageName + ":data_length:" + data.length);
            data_callback (null,data);
        })
    });

};
module.exports=get;