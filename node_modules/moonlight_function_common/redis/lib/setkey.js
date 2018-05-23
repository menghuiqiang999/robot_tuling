/**
 * Created by Administrator on 2018/4/25.
 */
"use strict";
var page_name="setkey of redis";
var errplace=require('moonlight_function_errplace');
try{


    var Redis=require("ioredis");
    var redis=new Redis();

    var setkey =function(key,value){

        redis.set(key,value);
    };
    module.exports= setkey;

}catch(err){
    errplace(err,page_name);
}