/**
 * Created by Administrator on 2018/4/25.
 */
"use strict";
var page_name="https";
var errplace=require('moonlight_function_errplace');
try{
    var get=require('./lib/get');
    exports.get=get;

    var post=require('./lib/post');
    exports.post=post;

}catch(err){
    errplace(err,page_name);
}