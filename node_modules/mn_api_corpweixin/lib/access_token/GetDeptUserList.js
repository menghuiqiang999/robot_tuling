/**
 * Created by Administrator on 2018/4/28.
 */


"use strict";
var page_name="get_dept_list in corpweixin of moonlight_api";
var catcherr=require('moonlight_function_errplace');

try{

    var com=require('moonlight_function_common');
    var https=com.https;
    var get=https.get;


    var GetDeptUserList=function(){
        var host = "qyapi.weixin.qq.com";
        //var url = "/cgi-bin/user/list?access_token=" + access_token + "&department_id=" + dept_id+"&fetch_child="+fetch_child;
        this.url;
        console.log(page_name+":the url is:"+ this.url);
        this.get_list=function(data_callback){
            get(host,this.url,function(result){
                console.log(page_name+":the department user list:"+result);
                data_callback(result);
            });
        };

    };
}catch(err){
    catcherr(err,page_name);
}
module.exports = GetDeptUserList;