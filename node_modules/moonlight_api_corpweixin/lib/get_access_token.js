/**
 * Created by Administrator on 2018/4/26.
 * Usage:
 *      get_access_token(corpid,corpsecret,function(result_callback){
 *          ......
 *      };
 * Callback:
 *      access_token.type string.
 *      such as :
 *          H6_udam4w2OIG6MSpGlAOfeEvoapcnSQGpaivJuXFpthGaGDcVLKUGdVqgh8g0Z5Vg91owLduXcChxPOscBM0Pp1ee-DX4kqh632FVIj-_DZMxSSJNKrkBL3szcowdWRFioD3OUMamyn5DxPE-wYa_krNVC7msIfo3SSYzmQc0QTZTxnusDyS3VqDwqZm4fGW0C9uuvIg7djAk8b5LrWhQ
 *      if the callback is null,means redis have no access_token value and there is a err to get from corpweixin.
 */
"use strict";
var page_name="get_access_token in corpweixin";
var catcherr=require('moonlight_function_errplace');

try{
    var get_access_token_from_corpweixin=require("./lib/get_access_token_from_corpweixin");
    var get_access_token_from_redis=require("./lib/get_access_token_from_redis");
    var save_access_token_to_redis=require("./lib/save_access_token_to_redis");

    var get_access_token=function(corpid,corpsecret,access_token_callback){
        get_access_token_from_redis(corpid,corpsecret,function(result){
            if (result==null){
                get_access_token_from_corpweixin(corpid,corpsecret,function(access_token){
                    if (access_token==null){
                        console.log(page_name+"get access_token from cropweixin failure!");
                        access_token_callback(null);
                    }
                    else{
                        save_access_token_to_redis(corpid,corpsecret,access_token);
                        access_token_callback(access_token);
                    }

                })
            }
            else{
                access_token_callback(result);
            }
        })

    }

}catch(err){
    catcherr(err,page_name);
}
module.exports=get_access_token;
