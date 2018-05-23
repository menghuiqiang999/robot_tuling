/**
 * Created by Administrator on 2018/4/25.
 */
'use strict';
var pageName = "getkey of redis";


var Redis = require("ioredis");
var redis = new Redis();

/**
 *
 * @param key - key save in the redis
 * @param value_callback - value get back
 * @example
 * get(key,function(err,result){
 *      ......
 * });
 */
var getkey = function(key,value_callback) {

    redis.exists (key).then( function (exists_key) {
            console.log(pageName + "exists_key:" + exists_key);
            if (exists_key){
                redis.get(key).then(function(result){
                    console.log(pageName+":value in the redis by key:"+result);
                    value_callback(null,result);
                })
            }
            else{
                value_callback( 'Haven\'t found the key!',null);
            };
    });
};

module.exports = getkey;