/**
 * Created by Administrator on 2018/4/30.
 */
"use strict";
var page_name="get_userinfo_by_code";
var catcherr=require('moonlight_function_errplace');
try{

    var com=require('moonlight_function_common');
    var https=com.https;
    var get=https.get;
    var get_userinfo_by_code= function (access_token,code,data_callback) {
        var host = "qyapi.weixin.qq.com";
        var url = "/cgi-bin/user/getuserinfo?access_token=" + access_token + "&code=" + code;
        console.log(page_name+":the url is:"+ url);
        get(host, url,function(result){
            console.log(page_name+":data_callback:"+result);
            data_callback(result);
        });
    };

}catch(err){
    catcherr(err,page_name);
}

module.exports=get_userinfo_by_code;