/**
 * Created by Administrator on 2018/4/26.
 *
 * when use access_token,find that it is expired, use this function to get a new access_token
 *
 */
"use strict";
var page_name="get_access_token in corpweixin";
var catcherr=require('moonlight_function_errplace');

try{
    var get_access_token_from_corpweixin=require("./lib/get_access_token_from_corpweixin");
    //var get_access_token_from_redis=require("./lib/get_access_token_from_redis");
    var save_access_token_to_redis=require("./lib/save_access_token_to_redis");

    var refresh_access_token=function(corpid,corpsecret,access_token_callback){

        get_access_token_from_corpweixin(corpid,corpsecret,function(access_token){
            if (access_token==null){
                console.log(page_name+"get access_token from cropweixin failure!");
                access_token_callback(null);
            }
            else{
                access_token_callback(access_token);
                save_access_token_to_redis(corpid,corpsecret,access_token);
            }

        })
    }

}catch(err){
    catcherr(err,page_name);
}
module.exports=refresh_access_token;