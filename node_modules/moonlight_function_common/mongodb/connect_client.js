/**
 * Created by Administrator on 2018/5/4.
 * @module connectClient
 * @version 1.0.0
 * @param url {string}
 * @param callback {object} callback function client  the db of mongodb
 * @returns callback  (err,client)
 * @example
 * connectClient(url, function (err,client) {
 *      ......
 * }
 */
'use strict';
var pageName = 'connect_client in mongodb of moonlight_function_common';

var connectClient = function (url,callback) {

    var mongoClient = require ('mongodb').MongoClient;

    mongoClient.connect (url,function (err,client) {
        if (err) {
            console.log(pageName  +  ':error:' + err);
            return callback(err);
        };
        console.log (pageName + "Connected Mongodb server successfully!");
        callback (null,client);

    });
};
module.exports=connectClient;