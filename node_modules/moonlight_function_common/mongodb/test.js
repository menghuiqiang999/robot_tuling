/**
 * Created by Administrator on 2018/5/4.
 * This is a comment of translateOptionsCallback.
 * @apiName test
 * @apiGroup mongodb
 *
 */

'use strict';
var pageName = 'test in mongodb of moonlight_function_common';
var catchErr = require('moonlight_function_errplace');




//var Mongodb = require('./mongodb');
//var mongodb = new Mongodb();

var mongodb = require ('./mongodb');

var options = {
    collectionName : "peweb"
};


var document = { name : "孟会强" , mobile : "18607558188" , weixin : "menghuiqiang999", city : "Shenzhen"};

//mongodb.insert ( document , options   );

var assert = require ('assert') ;



var defaultOptions = {
    url :  "mongodb://localhost:27017",
    dbName : "moonlight",
    collectionName : "pewebs"
};


mongodb.setDefaultOptions(defaultOptions,function(err,result_callback){
    if (err) {
        return console(pageName + 'this is a erroe from setDefaultOptions' );
    }
    console.log (pageName + ':result_callback:' + result_callback );
    if (result_callback) {

        mongodb.insert (document, function (err,result)  {
            if (err) {
                return console.log (pageName + ':The is a err from mongodb.insert' );
            };
            console.log (pageName + ":result:" + JSON.stringify (result) ) ;

        } );
    }
});


/*
mongodb.insert (document, function (err,result)  {
    if (err) {
        return console.log (pageName + ':The is a err from mongodb.insert' );
    };
    console.log (pageName + ":result:" + JSON.stringify (result) ) ;

} );

*/




