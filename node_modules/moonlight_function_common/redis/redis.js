/**
 * Created by Administrator on 2018/4/25.
 */
"use strict";
var page_name="redis";
var errplace=require('moonlight_function_errplace');

try{


    var setkey=require('./lib/setkey');
    exports.setkey=setkey;

    var setex_key=require('./lib/setex_key');
    exports.setex_key=setex_key;

    var expire_time=require('./lib/expire_time');
    exports.expire_time=expire_time;

    var getkey=require('./lib/getkey');
    exports.getkey=getkey;

}
catch(err){
    errplace(err,page_name);
}