/**
 * Created by Administrator on 2018/4/25.
 */
/*
"use strict";
var page_name="get of moonlight_function_https";
var errplace=require('moonlight_function_errplace');
try{

    var get = function (host, uri,data_callback) {


        var https = require('https');
        var options = {
            hostname: host,
            port: 443,
            path: uri,
            method: 'GET'
        };
        var req = https.request(options, function (res) {
            //console.log('STATUS: ' + res.statusCode);
            //console.log('HEADERS: ' + JSON.stringify(res.headers));
            // res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
                data_callback(chunk);
            });
        });
        //console.log(content);
        req.end();
    };



}catch(err){
    errplace(err,page_name);
}

module.exports=get;
*/
"use strict";
var page_name="get of moonlight_function_https";
var errplace=require('moonlight_function_errplace');
try{

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
                //console.log('BODY: ' + chunk);
                //process.stdout.write(chunk);
                // data_callback(chunk);

                data += chunk;
            });
            res.on('end',function(){
                console.log(page_name+":data:"+data);
                console.log(page_name+":data_length:"+data.length);
                data_callback(data);
            })
        });

    };



}catch(err){
    errplace(err,page_name);
}

module.exports=get;