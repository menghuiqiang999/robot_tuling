/**
 * Created by Administrator on 2018/5/14.
 */
'use strict';
var pageName = 'test4';

var corpweixin = require ('./corpweixin');
var getAccessToken = corpweixin.getAccessToken;

var corpId = 'wwf54870d97f9ee496';   //企业微信：深圳XX公司
var corpSecret="wE12G6DxXXDGI71khHpEaOBBRulpX4hqwCqBDkOLTM8"; //机器人
var msg = '1234567890123456789';
var encodingAesKey = 'tu11ooBABHM7AToEQkEyYsKKOyHvvahhWROnyrPXlUC';


getAccessToken(corpId,corpSecret,function(err,result){
    console.log(pageName, ':accessToken:',result);
});
