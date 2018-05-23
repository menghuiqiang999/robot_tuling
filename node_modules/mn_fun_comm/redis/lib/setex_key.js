/**
 * Created by Administrator on 2018/4/25.
 */
'use strict';
var pageName = "setex_key of redis";




var Redis = require("ioredis");
var redis = new Redis();

/**
 *
 * @param key
 * @param seconds - Expire time
 * @param value
 */
var setex_key  = function(key,seconds,value){

    redis.setex (key,seconds,value);
};

module.exports = setex_key;