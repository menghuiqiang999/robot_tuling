/**
 * Created by Administrator on 2018/4/25.
 */
"use strict";
var page_name="getkey of redis";
var errplace=require('moonlight_function_errplace');
try{


    var Redis=require("ioredis");
    var redis=new Redis();

    var getkey =function(key,value_callback){

        redis.exists(key).then(function(exists_key){
                console.log(page_name+ "exists_key:"+exists_key);
                if (exists_key){
                    redis.get(key).then(function(result){
                        console.log(page_name+":value in the redis by key:"+result);
                        value_callback(result);
                    })
                }
                else{
                    console.log(page_name +":doesn't exist the value by the key:" + key);
                    value_callback(null);
                }
        })
    }

}catch(err){
    errplace(err,page_name);
}
module.exports=getkey;