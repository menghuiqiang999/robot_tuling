/**
 * Created by Administrator on 2018/4/25.
 */
var page_name="setex_key of redis";
var errplace=require('moonlight_function_errplace');

try{

    var Redis=require("ioredis");
    var redis=new Redis();

    var setex_key =function(key,seconds,value){

        redis.setex(key,seconds,value);
    };


}catch(err){
    errplace(err,page_name);
}
module.exports= setex_key;