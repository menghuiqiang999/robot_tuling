/**
 * Created by Administrator on 2018/4/26.
 */
"use strict";
var page_name="save_access_token_to_redis";
var errplace=require('moonlight_function_errplace');

var com=require('moonlight_function_common');

var md5=com.crypto.md5;
var redis=com.redis;

try{

    var save_access_token_to_redis=function(corpid,corpsecret,access_token){
        var key_access_token=corpid+corpsecret+"access_token";
        md5(key_access_token,function(key){
            redis.setex_key(key,7200,access_token);     // 7200seconds
        })
    }

}catch(err){
    errplace(err,page_name);
}

module.exports=save_access_token_to_redis;


