/**
 * Created by Administrator on 2018/5/22.
 */
'use strict';
var pageName = 'get in http of mn_fun';
var get =function (host, uri,data_callback) {


    var http = require('http');
    var options = {
        hostname: host,
        port: 80,
        path: uri,
        method: 'GET'
    };
    var data="";
    var req = http.get(options, function (res) {
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

            data_callback(null,data);
        })
    });
};
module.exports = get;