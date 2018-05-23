/**
 * Created by Administrator on 2018/4/25.
 */
"use strict";
try{
    var page_name="test";
    var errplace=require('moonlight_function_errplace');

    var corpweixin=require('./corpweixin');


    var corpid = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
    var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录


    var get_access_token_from_corpweixing=corpweixin.get_access_token_from_corpweixin;
    var save_access_token_to_redis=corpweixin.save_access_token_to_redis;
    var get_access_token_from_redis=corpweixin.get_access_token_from_redis;
/*
    get_access_token_from_corpweixin(corpid,corpsecret,function(token_access){
        console.log(page_name +":token_access:"+ token_access);
    })
*/
/*
    var access_token="xqTXJ-c5JcWRborciLoVNGbUlejtHqcKWQjh8W6q8G2kSOF5FeT7jFJ8LnSedm-cqP_g4TG4zomy2k1vnEoAMUQZfIDNak28fKlXI1sq9mXr2vhiwZyAYcJFt4ihvHed9j7Q6qCp5bX9Deys5zsA-K132uEPfRwBahRusHfQc9rAVQ3AWw1GVVZV8V_c2EMkqgz3gd5O-wGbVJvKHd6AKA";
    save_access_token_to_redis(corpid,corpsecret,access_token);

*/
/*
    get_access_token_from_redis(corpid,corpsecret,function(result){
        if (result==null){
            console.log(page_name+":there is not a value in the redis by the key name!");
        }
        else{
           console.log(page_name+":the access_token:"+result)
        }
    });
*/



}catch(err){
    errplace(err,page_name);
}