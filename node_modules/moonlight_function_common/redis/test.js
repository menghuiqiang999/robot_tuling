/**
 * Created by Administrator on 2018/4/25.
 */
"use strict";
var page_name="test";
var errplace=require('moonlight_function_errplace');
try{


    var redis=require('./redis');

    var setkey=redis.setkey;
    var setex_key=redis.setex_key;
    var getkey=redis.getkey;

    var expire_time=redis.expire_time;

    var key="moonlight";
    //setkey(key,"wine");
    setex_key(key,30,"wine");
    expire_time(key,60);

    getkey(key,function(value){
        console.log(page_name +":value:"+ value);
    })

}catch(err){
    errplace(err,page_name);
}