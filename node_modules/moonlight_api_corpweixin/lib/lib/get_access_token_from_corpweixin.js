/**
 * Created by Administrator on 2018/4/25.
 * Prerequisite:
 *          Rewquire: moonlight_function_errplace use: npm install moonlight_function_errplace
 *          Require: moonlight_function_common use: npm install moonlight_function_common
 *Result:
 *          Get access_token from corpweixin
 *          if sucess callback access_token
 *          else callback null
 *Usage:
 *          get_access_token_from_corpweixin(corpid,corpsecret,function(token_access_callback){
 *              console.log(page_name +":token_access:"+ token_access_callback);
 *          })
 *          corpid and corpsecret refer by corpweixin    see: https://work.weixin.qq.com/api
 *          token_access_callback is the value get from corpweixin.
 *
 */
"use strict";
var page_name="get_access_token_from_corpweixin in corpweixin of moonlight_api ";
var errplace=require('moonlight_function_errplace');


var com=require('moonlight_function_common');

try{

    var https=com.https;
    var get=https.get;

    var get_access_token_from_corpweixin = function (corpid,corpsecret,access_token_callback) {
        var host = "qyapi.weixin.qq.com";
        var url = "/cgi-bin/gettoken?corpid=" + corpid + "&corpsecret=" + corpsecret;
       get(host, url,function(data_callback){
            var data_callback_json=  JSON.parse(data_callback);
            if (data_callback_json.errcode==0){
                var access_token=data_callback_json.access_token;
                console.log(page_name + ":access_token:" + access_token);
                access_token_callback(access_token);
            }
            else{
                console.log(page_name + ":the result:get_access_token_failure");
                access_token_callback(null);
            }
        });    // 获取通讯录access_token

    };

}catch(err){
    errplace(err,page_name);
}
module.exports=get_access_token_from_corpweixin;