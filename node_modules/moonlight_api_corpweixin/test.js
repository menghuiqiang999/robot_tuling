/**
 * Created by Administrator on 2018/4/25.
 * process:
 * 1,get token
 * 2,indentify user
 * 3,receive msg from user
 * 4,send it to robot and return callback
 * 5,send callback to user.
 *
 * @module test  To msg Tuling robot
 *
 */
"use strict";
var pageName="test";

const crypto = require('crypto');
var sha1 = require('./common/sha1');
var aes = require ('./common/aes');

var corpId = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
//var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录
var corpSecret="wE12G6DxXXDGI71khHpEaOBBRulpX4hqwCqBDkOLTM8"; //机器人
var token = 'moonlight';
var encodingAESKey = 'DpNwAtixaHQdh1IXTfQdP9c9dBYxUyfCsD1yY2GT3qE';

// come from corpweixin
var msg_signature='461a4926f648a2f07183db5c1266513f48bd1e45';
                     //'5088ef2958c094d7c9eadb6b8e0871acd22dd908'
var timestamp=1525941745;
var nonce=1526693362;
var echostr = 'Q3Z1hAmsPLk0v15%2BH9mdhIYmKZjtTOde6HCUj91tmqMv%2BF6fZtGvMeNecrdygyalV%2FuKzsgYqDUejyDpZVPIIQ%3D%3D';

// decode echostr
// decodeURI or decodeURIComponent
var decodeEchostr = decodeURIComponent(echostr);
console.log (pageName + ':decodeEchostr:'+ decodeEchostr);
// Q3Z1hAmsPLk0v15+H9mdhIYmKZjtTOde6HCUj91tmqMv+F6fZtGvMeNecrdygyalV/uKzsgYqDUejyDpZVPIIQ==


var b = new Buffer(decodeEchostr , 'Base64');
var sEchostr = b.toString('Hex');
console.log ('sEchostr buffer length:' + b.byteLength );
console.log ('sEchostr:' + sEchostr);
// 32 byte  hexadecimal
// 4376758409ac3cb934bf5e7e1fd99d8486262998ed4ce75ee870948fdd6d9aa32ff85e9f66d1af31e35e72b7728326a557fb8acec818a8351e8f20e96553c821

var bKey = new Buffer(encodingAESKey + '=' , 'base64');
var AESKey = bKey.toString('hex');
console.log (pageName + ':AESKEY:' + AESKey);
//AESKey:0e937002d8b168741d8752174df41d3fd73d7416315327c2b03d72636193dea1
console.log ('AesKey buffer length:' + b.byteLength );
var iv='0e937002d8b168741d8752174df41d3f';
console.log ('iv buffer length:' + iv.byteLength );

// Decrypto sEchostr  key: AESKey  iv:iv
// returns : randMsg

var randMsg = aes.decryption(sEchostr,AESKey,iv);
console.log ('randMsg:' + randMsg);


/*
var randMsg = aesDecrypt(sEchostr,AESKey,iv);

console.log( pageName + ':randMsg:' + randMsg);


var contentStr = token + timestamp + nonce + echostr;
console.log(pageName +':contentStr:' +contentStr);

var content = contentStr.split('').sort().join('');

console.log ('content:' + content +  ':' + pageName);



sha1(content,function(devMsgSignature){

    console.log (pageName + ':devMsgSignature:' + devMsgSignature);
});




function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes-128-ecb', key );
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
};

function aesDecrypt(encrypted, key ,iv) {
    const decipher = crypto.createDecipher('aes-128-ecb', key ,iv );
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};
*/
/*
0e937002d8b168741d8752174df41d3fd73d7416315327c2b03d72636193dea1
Q3Z1hAmsPLk0v15+H9mdhIYmKZjtTOde6HCUj91tmqMv+F6fZtGvMeNecrdygyalV/uKzsgYqDUejyDpZVPIIQ==

0e937002d8b168741d8752174df41d3f d73d7416315327c2 b03d72636193dea1
/*

var data = 'Hello, this is a secret message!';
var key = 'Password!';
var encrypted = aesEncrypt(data, key);
var decrypted = aesDecrypt(encrypted, key);

console.log('Plain text: ' + data);
console.log('Encrypted text: ' + encrypted);
console.log('Decrypted text: ' + decrypted);




crypto.createCipheriv(algorithm, key, iv)
aes-128-ecb
cipher.update(data, [input_encoding], [output_encoding])
对密文BASE64解码
var crypto = require('crypto');
var cipher = crypto.createCipher('aes-256-cbc','InmbuvP6Z8')
var text = "123|123123123123123";
var crypted = cipher.update(text,'utf8','hex')
crypted += cipher.final('hex')
var decipher = crypto.createDecipher('aes-256-cbc','InmbuvP6Z8')
var dec = decipher.update(crypted,'hex','utf8')
dec += decipher.final('utf8')

aes_msg=Base64_Decode(msg_encrypt)

使用AESKey做AES解密

rand_msg=AES_Decrypt(aes_msg)

去掉rand_msg头部的16个随机字节和4个字节的msg_len，截取msg_len长度的部分即为msg，剩下的为尾部的CorpID

验证解密后的CorpID、msg_len。注意，当为第三方套件回调事件时，CorpID的内容为suiteid


*/

/*

var errplace=require('moonlight_function_errplace');
try{


    var corpweixin=require('./corpweixin');


    var corpid = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
    //var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录
    var corpsecret="wE12G6DxXXDGI71khHpEaOBBRulpX4hqwCqBDkOLTM8"; //机器人
    var get_access_token=corpweixin.get_access_token;
    var refresh_access_token=corpweixin.refresh_access_token;

    //var corpid = "wx0293666c93319aa0";   //金友会
    //var corpsecret = "sF7K8llAhaIU7CZMCTQMP42nlPRUcb3aN9zK5ofKu1o"; //通讯录
/*
    get_access_token(corpid,corpsecret,function(result){

        console.log(page_name+":the final of access_token:"+result)

    });
*/
/*
    refresh_access_token(corpid,corpsecret,function(result){
        console.log(page_name+":the refresh access_token:"+result)
    })

*/
/*
    //------------------------------------------------------------------------------------------------------------------
    //Test get_user
    var userid = "MengHuiQiang";
    var access_token="6FLZS4ZbH_Et5AE3NfLYOGjxmynKESSK_TpRZeX8xeeqfGzooS2KumY62xWVNZKwJmboU2VUVOWgYcUBf8lycv8MRS0FrUdcGXzYTrB8fqzPTcfONst9rZ1Ra9Sk1NZx17lppqPhw8Rnp-CE5zWVE0SwVV_TqYi7hueLU-SnW_X7JD14AkR-fzOAyQq3oLPvrLuI0NrVnicb3pAn-FK-VA";

    var get_user=corpweixin.get_user;
    get_user(access_token,userid,function(data_callback){
        console.log(page_name+":the user info:" + data_callback);
    })
*/
    //------------------------------------------------------------------------------------------------------------------
    //Test get department list
    /*
    var access_token="6FLZS4ZbH_Et5AE3NfLYOGjxmynKESSK_TpRZeX8xeeqfGzooS2KumY62xWVNZKwJmboU2VUVOWgYcUBf8lycv8MRS0FrUdcGXzYTrB8fqzPTcfONst9rZ1Ra9Sk1NZx17lppqPhw8Rnp-CE5zWVE0SwVV_TqYi7hueLU-SnW_X7JD14AkR-fzOAyQq3oLPvrLuI0NrVnicb3pAn-FK-VA";

    var dept_id=null;
    var get_dept_list=corpweixin.get_dept_list;
    get_dept_list(access_token,dept_id,function(data_callback){
        console.log(page_name+":the user info:" + data_callback);
    })

   */
    //------------------------------------------------------------------------------------------------------------------
    //Test get department list
    //var access_token="6FLZS4ZbH_Et5AE3NfLYOGjxmynKESSK_TpRZeX8xeeqfGzooS2KumY62xWVNZKwJmboU2VUVOWgYcUBf8lycv8MRS0FrUdcGXzYTrB8fqzPTcfONst9rZ1Ra9Sk1NZx17lppqPhw8Rnp-CE5zWVE0SwVV_TqYi7hueLU-SnW_X7JD14AkR-fzOAyQq3oLPvrLuI0NrVnicb3pAn-FK-VA";
/*
    var dept_id=1;
    var fetch_child="0";
    var get_dept_user_list=corpweixin.get_dept_user_list;

    get_access_token(corpid,corpsecret,function(access_token){
        if (access_token==null){
            console.log(page_name+":there is a err");
        }
        else{
            get_dept_user_list(access_token,dept_id,fetch_child,function(data_callback){
                console.log(page_name+":the user info:" + data_callback);
                var data=JSON.parse(data_callback);
                if (data.errorcode==42001){
                    refresh_access_token(corpid,corpsecret,function(access_token_refresh){
                        get_dept_user_list(access_token_refresh,dept_id,fetch_child,function(user_callback){
                            console.log(page_name+":the department user list by refresh access_token:"+user_callback);
                        })
                    })
                }
                else{
                    console.log(page_name+":the department user list:"+ data_callback);
                }

            })
        }
    })


*/
/*
    var dept_id=1;
    var fetch_child="0";
    var access_token=corpweixin.access_token;
    var get_dept_user_list=corpweixin.get_dept_user_list;

    access_token(corpid,corpsecret,function(access_token){

        get_dept_user_list(access_token,dept_id,fetch_child,function(data_callback){
            console.log(page_name+":the user info:" + data_callback);
        })
    })
*/
//----------------------------------------------------------------------------------------------------------------------
/*
    // Test get_dept_user_list_detail
    var dept_id=66;
    var fetch_child="1";
    var access_token=corpweixin.access_token;
    var get_dept_user_list_detail=corpweixin.get_dept_user_list_detail;

    access_token(corpid,corpsecret,function(access_token){

        get_dept_user_list_detail(access_token,dept_id,fetch_child,function(data_callback){
            var result_length=data_callback.length;
            console.log(page_name+":result_length:"+result_length)
            //console.log(page_name+":the user detail info:" + data_callback);
        })
    })
*/
   
//----------------------------------------------------------------------------------------------------------------------
/*
    //test get_userinfo_by_ocde
    var access_token=corpweixin.access_token;
    var get_userinfo_by_code=corpweixin.get_userinfo_by_code;
    var code="Iad9EDzsJbpNHz8wU7S0Bts1ugVdOlTLZqu4Wm-Qcss";

    access_token(corpid,corpsecret,function(access_token){
        get_userinfo_by_code(access_token,code,function(data_callback){
            console.log(page_name+":the datacallback:"+data_callback)
        })
    })





}catch(err){
    errplace(err,page_name);
}

*/