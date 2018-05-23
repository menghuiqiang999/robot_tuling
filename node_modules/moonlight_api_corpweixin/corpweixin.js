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
"use strict";
var page_name="corpweixin of moonlight_api";
var catcherr=require('moonlight_function_errplace');



var access_token=require('./lib/access_token');
exports.accessToken=access_token;
//----------------------------------------------------------------------------------------------------------------------
/*
var get_access_token=require('./lib/get_access_token');
exports.get_access_token=get_access_token;

var refresh_access_token=require('./lib/refresh_access_token');
exports.refresh_access_token=refresh_access_token;
*/
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


//----------------------------------------------------------------------------------------------------------------------
//verifyUrl
var verifyUrl = require ('./lib/verify_url');
exports.verifyUrl = verifyUrl;