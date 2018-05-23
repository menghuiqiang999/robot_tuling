/**
 * Created by Administrator on 2018/4/27.
 *
 * Usage:
 *      access_token(corpid,corpsecret,function(result_callback){
 *          ......
 *      };
 * Callback:
 *      access_token.type string.
 *      such as :
 *          H6_udam4w2OIG6MSpGlAOfeEvoapcnSQGpaivJuXFpthGaGDcVLKUGdVqgh8g0Z5Vg91owLduXcChxPOscBM0Pp1ee-DX4kqh632FVIj-_DZMxSSJNKrkBL3szcowdWRFioD3OUMamyn5DxPE-wYa_krNVC7msIfo3SSYzmQc0QTZTxnusDyS3VqDwqZm4fGW0C9uuvIg7djAk8b5LrWhQ
 *
 * @param coprid {string}  from corpweixin
 * @param corpsecret {string} from corpweixin
 * @param access_token_callback
 * @returns access_token_callback
 *
 */
"use strict";
var page_name="access_token in corpweixin of moonlight_api";
var catcherr=require('moonlight_function_errplace');
try{


    var get_access_token=require('./get_access_token');
    var refresh_access_token=require('./refresh_access_token');
    var get_dept_list=require('./get_dept_list');

    var access_token=function(corpid,corpsecret,access_token_callback){

        get_access_token(corpid,corpsecret,function(result_callback){
            var dept_id=1;
            get_dept_list(result_callback,dept_id,function(data_callback){
                console.log(page_name+":the user info:" + data_callback);
                var data=JSON.parse(data_callback);

                if (data.errorcode==42001){
                    refresh_access_token(corpid,corpsecret,function(access_token_refresh){
                        console.log(page_name+":the department user list by refresh access_token:"+access_token_refresh);
                        access_token_callback(access_token_refresh);
                    })
                }
                else{
                    console.log(page_name+":the department user list:"+ data_callback);
                    access_token_callback(result_callback);
                }
            })
        })
    }

}catch(err){
    catcherr(err,page_name);
}
module.exports=access_token;