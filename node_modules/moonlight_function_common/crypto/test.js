/**
 * Created by Administrator on 2018/4/25.
 * This is test program to test if the md5 is ok
 */
"use strict";
var page_name="test";
var errplace=require('moonlight_function_errplace');
try{
    var crypt=require('./crypto');
    var md5=crypt.md5;
    var input="Shenzhen moonlight wine Co. Ltd";
    md5(input,function(result){
        console.log(page_name+":"+input+":crypto_md5:"+ result);
        console.log("The md5 function ok");
    })
}catch(err){
    errplace(err,page_name);
}