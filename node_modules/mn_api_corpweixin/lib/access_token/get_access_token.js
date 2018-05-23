/**
 * Created by Administrator on 2018/5/15.
 */
'use strict';
var pageName = 'get_access_token';

/**
 * @module getAccessToken
 * @param corpId
 * @param coprSecret
 * @param accessTokeCallbck
 */

var getAccessToken = function (corpId,corpSecret,accessTokenCallback ){
    fromRedis(corpId,corpSecret,function(err,result){
        if (err) {
            refresh(corpId,corpSecret,accessTokenCallback);
            return;
        };
        //console.log(pageName, ':result fromRedis: ', result);
        if (validAccessToken(result)){
            accessTokeCallback(null,result)
        }
        else{
            refresh(corpId,corpSecret,accessTokenCallback);
        };
    });
};
module.exports =  getAccessToken;

//----------------------------------------------------------------------------------------------------------------------
/**
 *
 * @param corpId
 * @param corpSecret
 * @param accessTokenCallback
 */

function refresh (corpId,corpSecret,accessTokenCallback) {

    refreshAccessToken(corpId,corpSecret,function(err,callbackResult){
        if (err) {
            accessTokenCallback(err);
            return;
        }
        accessTokenCallback (null,callbackResult);
    });
};


var com = require('mn_fun_comm');
var https = com.https;
var get = https.get;
var md5=com.crypto.md5;
var redis=com.redis;

//----------------------------------------------------------------------------------------------------------------------
/**
 *
 * @param corpId
 * @param corpSecret
 * @param accessTokenCallback
 */

function fromCorpweixin  (corpId,corpSecret,accessTokenCallback) {

    var host = "qyapi.weixin.qq.com";
    var url = "/cgi-bin/gettoken?corpid=" + corpId + "&corpsecret=" + corpSecret;
    get(host, url,function (err,dataCallback){
        if (err) {
            accessTokenCallback(err);
            return;
        };
        var dataCallbackJson =  JSON.parse(dataCallback);
        if (dataCallbackJson.errcode==0){
            var accessToken = dataCallbackJson.access_token;
            console.log(pageName + ":access_token:" + accessToken);
            accessTokenCallback(null,accessToken);
        }
        else{
            console.log(pageName + ":the result:get_access_token_failure!");
            accessTokenCallback(pageName + 'get access_token from corpweixin failure!' +dataCallback);

        }
    });    // 获取通讯录access_token


};

//----------------------------------------------------------------------------------------------------------------------
/**
 *
 * @param corpId
 * @param corpSecret
 * @param accessTokenCallback
 */

function fromRedis (corpId,corpSecret,accessTokenCallback) {
    var keyAccessToken = corpId + corpSecret + "accessToken" ;
    md5(keyAccessToken,function(err,key){
        if (err){
            accessTokenCallback(err);
            return;
        }
        redis.getkey (key,function (e,result) {
            if (e){
                accessTokenCallback(e);
                return;
            }
            accessTokenCallback (null,result);
        });
    });
};


//----------------------------------------------------------------------------------------------------------------------
/**
 *
 * @param corpId
 * @param corpSecret
 * @param accessToken
 */

function toRedis (corpId,corpSecret,accessToken) {
    var keyAccessToken = corpId + corpSecret + "accessToken" ;
    md5(keyAccessToken,function(err,key){
        if(err){
            accessToken(err);
            return;
        }
        redis.setex_key(key,7200,accessToken);     // 7200seconds
    });
};

//----------------------------------------------------------------------------------------------------------------------
/**
 *
 * @param accessToken
 */

function validAccessToken (accessToken){
    var dept_id=1;
    var host = "qyapi.weixin.qq.com";
    var url = "/cgi-bin/department/list?access_token=" + accessToken + "&id=" + dept_id;
    //console.log(pageName,':url of validAceessToken:',url);
    get(host, url,function(err,result){
        if (err) {
            return;
        };
        var data=JSON.parse(result);
        //console.log (pageName, ':result:',result);
        if (data.errcode === 0){
            return true ;
        }
        else{
            return false ;
        }
    });
};

//----------------------------------------------------------------------------------------------------------------------
/**
 *
 * @param corpId
 * @param corpSecret
 * @param accessTokenCallback
 */

function refreshAccessToken (corpId,corpSecret,accessTokenCallback) {
    fromCorpweixin(corpId,corpSecret,function(err,accessToken){
        if (err){
            console.log(pageName+"get access_token from cropweixin failure!");
            accessTokenCallback(err);
            return;
        }
        else{
            accessTokenCallback(null,accessToken);
            toRedis(corpId,corpSecret,accessToken);
        };
    });
};

