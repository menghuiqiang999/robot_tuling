/**
 * Created by Administrator on 2018/5/12.
 * https://work.weixin.qq.com/api/doc#12976/%E6%B6%88%E6%81%AF%E4%BD%93%E7%AD%BE%E5%90%8D%E6%A0%A1%E9%AA%8C
 * 接收企业微信发来的req
 * 识别 msg_signature,timestamp,nonce,echostr
 * verify if msg_signature is right and callback msg decrypted by echostr
 * @module verifyUrl  - 企业微信验证URL
 * @param req {object} - from corpweixin
 * @param callback - callback functions
 * @return callback (err,result)  result is like true or false if isFromCorpweixin true  else false
 * @example
 * var verifyUrl = function(req,corpInfo,callback){
 *  ......
 *  };
 */
'use strict';
const pageName = 'verifyMsgSignature';
const com = require ('moonlight_function_common');
const crypto=com.crypto;
const sha1=crypto.sha.sha1;

var verifyMsgSignature = function(req,corpInfo,callback){

    // identify ? req param

    var signature =req.query.msg_signature;
    var timestamp =req.query.timestamp;
    var nonce= req.query.nonce;
    var echostr = req.query.echostr;

    console.log (pageName + ':req.query:' + signature + ':' + timestamp + ':'+ nonce + ':echostr:' + echostr);

    //corp infomation from corpweixin
    const corpId = corpInfo.corpId;
    const token = corpInfo.token;

    // Verify msg_signature

    var arrayStr=[token,timestamp,nonce,echostr];

    var content=arrayStr.sort().join('');
    var devMsgSignature = sha1(content);
    console.log (pageName + ':devMsgSignature:' + devMsgSignature);
    if (devMsgSignature=== signature) {

        callback (null,true);
    }
    else{
        callback (null,false);
    };

};

module.exports = verifyMsgSignature;

