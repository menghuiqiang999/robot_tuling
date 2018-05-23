/**
 * Created by Administrator on 2018/4/27.
 */
"use strict";
var page_name="get_user in corpweixin of moonlight_api";
var catcherr=require('moonlight_function_errplace');
try{
    var com=require('moonlight_function_common');
    var https=com.https;
    var get=https.get;
    var get_user= function (access_token,userid,data_callback) {
        var host = "qyapi.weixin.qq.com";
        var url = "/cgi-bin/user/get?access_token=" + access_token + "&userid=" + userid;
        console.log(page_name+":the url is:"+ url);
        get(host, url,function(result){
            console.log(page_name+":the user info:"+result);
            data_callback(result);
        });
    };
}catch(err){
    catcherr(err,page_name);
}
module.exports=get_user;