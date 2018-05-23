/**
 * Created by Administrator on 2018/4/25.
 */
'use strict';
var pageName="expire_time of redis";



var Redis = require("ioredis"); // npm install ioredis
var redis = new Redis();

/**
 *
 * @param key
 * @param expire_time_seconds
 */
var expire_time=function (key,expire_time_seconds){

    redis.expire (key,expire_time_seconds);
};


module.exports=expire_time;