/**
 * Created by Administrator on 2018/4/27.
 */

"use strict";
var page_name="post in https of moonlight_function_common";
var catcherr=require('moonlight_function_errplace');
try{

    var post = function (host, uri, content,data_callback) {

        var https = require('https');
        console.log(page_name+":the content is:" + content);
        console.log(page_name+":the length of  content is:" + content.length);
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
        var req = https.request(options, function (res) {
            console.log(page_name+':STATUS: ' + res.statusCode);
            console.log(page_name+':HEADERS: ' + JSON.stringify(res.headers));
            //console.log('BODY: ' + res.body);
            //res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
                data_callback(chunk);
            });
        });

        req.write(content);
        req.end();

    };

}catch(err){
    catcherr(err,page_name);
}
module.exports=post;
