/**
 * Created by Administrator on 2018/4/26.
 */
"use strict";
var page_name="get_access_token_to_redis";
var errplace=require('moonlight_function_errplace');

var com=require('moonlight_function_common');

var md5=com.crypto.md5;
var redis=com.redis;

try{

    var get_access_token_to_redis=function(corpid,corpsecret,access_token_callback){
        var key_access_token=corpid+corpsecret+"access_token";
        md5(key_access_token,function(key){
            redis.getkey(key,function(result){
                access_token_callback(result);
            });
        })
    }

}catch(err){
    errplace(err,page_name);
}

module.exports=get_access_token_to_redis;
