/**
 * Created by Administrator on 2018/4/25.
 */
"use strict";
var page_name="test";
var errplace=require('moonlight_function_errplace');
try{
    //------------------------------------------------------------------------------------------------------------------
    //Test get
    /*
    var https=require('./https');
    var get=https.get;

    var corpid = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
    var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录

    var host = "qyapi.weixin.qq.com";
    var url = "/cgi-bin/gettoken?corpid=" + corpid + "&corpsecret=" + corpsecret;





    get(host, url,function(data_callback) {
        console.log(page_name + ":data_callback:" + data_callback);
    })
    */

//----------------------------------------------------------------------------------------------------------------------
// Test post
    var userid = "MengHuiQiang";
    var access_token="6FLZS4ZbH_Et5AE3NfLYOGjxmynKESSK_TpRZeX8xeeqfGzooS2KumY62xWVNZKwJmboU2VUVOWgYcUBf8lycv8MRS0FrUdcGXzYTrB8fqzPTcfONst9rZ1Ra9Sk1NZx17lppqPhw8Rnp-CE5zWVE0SwVV_TqYi7hueLU-SnW_X7JD14AkR-fzOAyQq3oLPvrLuI0NrVnicb3pAn-FK-VA";
    var https=require('./https');
    var post=https.post;
    var data = {
        "userid": "zhangsan6",
        "name": "张三3",
        "english_name": "jackzhaneg",
        "mobile": "15945215521",
        "department": [1],
        "order": [10, 40],
        "position": "产品经理",
        "gender": "1",
        "isleader": 1,
        "enable": 1
    };

    var createuser_corpweixin = function (data) {
        var host = "qyapi.weixin.qq.com";
        var url = "/cgi-bin/user/create?access_token=" + access_token;
        var content=JSON.stringify(data);
        post(host, url,content,function(result){
            console.log(page_name+":the post result: "+ result);

        });
    };
    createuser_corpweixin(data);


}catch(err){
    errplace(err,page_name);
}


