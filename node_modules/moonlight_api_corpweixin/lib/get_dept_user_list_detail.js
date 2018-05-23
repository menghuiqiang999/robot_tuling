/**
* Created by Administrator on 2018/4/28.
* This is same as get_dept_user_list, except url.
* */
"use strict";
var page_name="get_dept_list_detail in corpweixin of moonlight_api";
var catcherr=require('moonlight_function_errplace');

try{
    var com=require('moonlight_function_common');
    var https=com.https;
    var get=https.get;
    //var get=require('./mget');
/*
    var get_dept_user_list= function (access_token,dept_id,fetch_child,data_callback) {
        var host = "qyapi.weixin.qq.com";
        var url = "/cgi-bin/user/list?access_token=" + access_token + "&department_id=" + dept_id+"&fetch_child="+fetch_child;
        //console.log(page_name+":the url is:"+ url);

        get(host, url,function(result){
            //console.log(page_name+":the department user list:"+result);
            data_callback(result);

        });
    };

*/
    var get_dept_user_list= function (access_token,dept_id,fetch_child,data_callback) {
        var host = "qyapi.weixin.qq.com";
        var url = "/cgi-bin/user/list?access_token=" + access_token + "&department_id=" + dept_id+"&fetch_child="+fetch_child;
        //console.log(page_name+":the url is:"+ url);

        get(host, url,function(result){
            //console.log(page_name+":the department user list:"+result);
           // process.stdout.write(result);
            data_callback(result);

        });
    };
}catch(err){
    catcherr(err,page_name);
}
module.exports=get_dept_user_list;