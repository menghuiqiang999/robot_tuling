/**
 * Created by Administrator on 2018/5/4.
 * This is a comment of translateOptionsCallback.
 * @module mongodb
 * @version 1.0.0
 *
 */


'use strict';
var pageName = 'mongodb in mongodb of moonlight_function_common';


var connectClient = require("./connect_client");
var translateOptionsCallback = require ('../common/translate_options_callback');
//----------------------------------------------------------------------------------------------------------------------
//assert
var assert = require ('assert');

var Mongodb = function () {

    var defaultOptions = {
        url :  "mongodb://localhost:27017",
        dbName : "moonlight",
        collectionName : "collection"
    };


    this.setDefaultOptions = function (options,result) {
        defaultOptions=options;
        result(null,true);
    };


    var setOptions = function (options,result) {

        var url = options .url || defaultOptions .url;
        var dbName = options .dbName || defaultOptions .dbName;
        var collectionName = options .collectionName || defaultOptions .collectionName;
        var optionsCallback = {
            url : url ,
            dbName : dbName ,
            collectionName : collectionName
        };
        result (null ,optionsCallback) ;
    };


    //------------------------------------------------------------------------------------------------------------------
    // setDefaultOptionsCallback


    var setOptionsCallback = function (arg,callback) {
        translateOptionsCallback (arg,function (err,result){

            if (err) {
                var whereInPage = 'setOptionsCallback at:' + pageName;
                console.log(whereInPage  +  ':error:' + err);
                return callback(err);
            };
            var options = result.options ;
            setOptions (options, function (err,optionsCallback) {
                var dataCallback = {
                    options : optionsCallback ,
                    callback : result.callback
                }
                console.log (pageName + ':optionsCallback:' + JSON.stringify (dataCallback) ) ;
                //callback(null,dataCallback);
                callback(null,dataCallback);
            });

        } );

    };

};

module.exports=new Mongodb;

//------------------------------------------------------------------------------------------------------------------

/**
 * This is insert method of mongodb
 * @function insert
 * @param document {object} object ot mongodb, a document
 * @param options options {json} this is option parameter, the function will set it to default options if it is null.
 * @param resultCallback , this is an option parameter
 * @returns resultCallback callback function
 * @example
 * var mongodb = require ('./mongodb');
 * mongodb.insert (document)  {
 *      ......
 * }
 * mongodb.insert (document , options)  {
 *      ......
 * }
 * mongodb.insert (document , function (err,result)  {
 *      ......
 * }
 * mongodb.insert (document, options , function (err,result)  {
 *      ......
 * }
 */
Mongodb.prototype.insert = function(document,options,resultCallback){
    setOptionsCallback(arguments,function(err,result){
        var optionsCallback = result.options;
        var callback = result.callback;

        if (err) {
            var whereInPage = 'setOptionsCallback at:' + pageName;
            console.log(whereInPage + ':there is an error:' + err);
            return callback(err);
        };
        var url = optionsCallback.url;
        var dbName = optionsCallback.dbName;
        var collectionName = optionsCallback.collectionName;
        connectClient(url, function (err,client) {

            if (err) {
                var whereInPage = 'connectClinet at:' +pageName ;
                console.log(whereInPage + ':there is an error:' + err);
                return callback(err);
            };

            var db = client.db(dbName);
            var col = db.collection(collectionName);
            col.insert(document, function (err, result) {
                //console.log(pageName + ":result:" + JSON.stringify(result));

                if (callback) {
                    if (err) {
                        var whereInPage = 'col.insert at:' + pageName;
                        console.log(whereInPage + ':there is an error:' + err);
                        return callback(err);
                    };
                    callback (null, result);
                }

            });
            client.close();
        });
    });

};