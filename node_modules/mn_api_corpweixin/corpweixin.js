/**
 * Created by Administrator on 2018/4/25.
 *
 * accessToken
 *
 * @exaample
 * accessToken=function(corpid,corpsecret,access_token_callback){
 *      ......
 * };
 */
'use strict';
var pageName='corpweixin bus';


var getAccessToken = require('./lib/access_token/get_access_token');
exports.getAccessToken=getAccessToken;

/*
//----------------------------------------------------------------------------------------------------------------------
//  user
var get_user=require('./lib/get_user');
exports.get_user=get_user;

//----------------------------------------------------------------------------------------------------------------------
//department
var get_dept_list=require('./lib/get_dept_list');
exports.get_dept_list=get_dept_list;

//----------------------------------------------------------------------------------------------------------------------
//department user list
var get_dept_user_list=require('./lib/get_dept_user_list');
exports.get_dept_user_list=get_dept_user_list;

//----------------------------------------------------------------------------------------------------------------------
//department user list detail
var get_dept_user_list_detail=require('./lib/get_dept_user_list_detail');
exports.get_dept_user_list_detail=get_dept_user_list_detail;


//----------------------------------------------------------------------------------------------------------------------
//get_userinfo_by_code
var get_userinfo_by_code=require('./lib/get_userinfo_by_code');
exports.get_userinfo_by_code=get_userinfo_by_code;

*/
//----------------------------------------------------------------------------------------------------------------------
//material
var material = require('./lib/material');
exports.material = material ;
//----------------------------------------------------------------------------------------------------------------------
//receiveMsg
var receiveMsg = require ('./lib/receive_msg');
exports.receiveMsg = receiveMsg;
//----------------------------------------------------------------------------------------------------------------------
//sendMedia
var sendMedia = require ('./lib/send_media');
exports.sendMedia = sendMedia ;


//----------------------------------------------------------------------------------------------------------------------
//sendMsg

var sendMsg = require ('./lib/send_msg');
exports.sendMsg = sendMsg ;