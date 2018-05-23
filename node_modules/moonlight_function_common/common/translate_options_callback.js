/**
 * Created by Administrator on 2018/5/7.
 * @module translateOptionsCallback
 * @version 1.0.0
 * @param {object} arguments  The arguments of the Function use this function.
 * @param {object} callback function
 * @returns {object} callback function, if success: {null,{ "options" : options , "callback" : callback } }
 * @example   This is example of use case
 *  var.insert = function(document,options,resultCallback){
 *       translateOpertionsCallback(arguments,function(err,result){
 *                         ......
 *       }
 *   }
 *
 */
'use strict';
var translateOptionsCallback = function (arg , result) {

    var args = Array.prototype.slice.call(arg, 1);
    var callback = typeof args[args.length - 1] == 'function' ? args.pop() : null;
    var options = args.length ? args.shift() : null;
    options = options || {};

    var dataCallback = {
        options : options ,
        callback : callback
    };

    result (null,dataCallback) ;

};
module.exports = translateOptionsCallback;