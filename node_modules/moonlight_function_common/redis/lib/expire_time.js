/**
 * Created by Administrator on 2018/4/25.
 */
"use strict";
var page_name="expire_time of redis";
var errplace=require('moonlight_function_errplace');

try{


    var Redis=require("ioredis"); // npm install ioredis
    var redis=new Redis();

    var expire_time=function(key,expire_time_seconds){

        redis.expire(key,expire_time_seconds);
    };

}catch(err){
    errplace(err,page_name);
}
module.exports=expire_time;