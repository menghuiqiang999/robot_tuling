/**
 * Created by Administrator on 2018/5/15.
 *
 */
'use strict';
var pageName = 'receiveMsg';

var receiveMsg = function () {};

module.exports = receiveMsg;


var lib = require ('./lib');

var sha = lib.sha;
var decryptoMsg = lib.aesMsg.decryptoMsg;


/**
 *
 * @param sCorpId
 * @param sToken
 * @param sEncodingAesKey
 * @param sMsgSignature
 * @param sTimeStamp
 * @param sNonce
 * @param sEchoStr
 * @param sReplyEchoStr - callback function, the result is msg need to reply to server of corpweixin.
 */

var verifyURL = function (sCorpId,sToken,sEncodingAesKey,sMsgSignature,sTimeStamp,sNonce,sEchoStr,sReplyEchoStr) {

    var msgSignature = sha.signature(sToken,sTimeStamp,sNonce,sEchoStr);
    console.log (pageName, ':msgSignature:',msgSignature);
    if (msgSignature == sMsgSignature ) {
        decryptoMsg(sEchoStr,sCorpId,sEncodingAesKey,function(err,result){
            if (err) {
                return;
            }
            sReplyEchoStr(err,result);
        } );
    }
    else {
        console.log(pageName +  ':There visit is not from corpweixin');
    };
};



receiveMsg.verifyUrl = function (corpInfo,reqInfo,encrypted,sReply) {

    var sCorpId = corpInfo.corpId;
    var sToken = corpInfo.token;
    var sEncodingAesKey = corpInfo.encodingAesKey;

    var sMsgSignature = reqInfo.signature;
    var sTimeStamp = reqInfo.timestamp;
    var sNonce = reqInfo.nonce;

    var sEncrypted = encrypted;


    var msgSignature = sha.signature(sToken,sTimeStamp,sNonce,sEncrypted);
    console.log (pageName, ':msgSignature:',msgSignature);
    if (msgSignature == sMsgSignature ) {
        decryptoMsg(sEncrypted,sCorpId,sEncodingAesKey,sReply);
    }
    else {
        console.log(pageName +  ':There visit is not from corpweixin');
    };
};




var com= require ('mn_fun_comm');
var xml2json = com.xml.xml2json;


receiveMsg.receiveMsg = function (corpInfo,reqInfo,postData,sReplyCallback) {
    xml2json(postData,function(err,xmlCallback){
        console.log (pageName,':xmljson:',JSON.stringify(xmlCallback));
        console.log ('encrypt:',xmlCallback.xml.Encrypt[0]);

        var  encrypted = xmlCallback.xml.Encrypt[0];

        receiveMsg.verifyUrl(corpInfo,reqInfo,encrypted,sReplyCallback);
    });

};

receiveMsg.responsed = function(msgXml,corpInfo,reqInfo,resDataCallback) {

    /**
     * 1,encrypto msg
     * 2, new signature
     * 3, responsed
     * 4,<xml>
     *      <Encrypt><![CDATA[msg_encrypt]]></Encrypt>
     *      <MsgSignature><![CDATA[msg_signature]]></MsgSignature>
     *      <TimeStamp>timestamp</TimeStamp>
     *      <Nonce><![CDATA[nonce]]></Nonce>
     * </xml>
     *
     * msg  = <xml><ToUserName><![CDATA[wwf54870d97f9ee496]]></ToUserName><FromUserName><![CDATA[MengHuiQiang]]></FromUserName><CreateTime>1526446891</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[好的]]></Content><MsgId>940564059</MsgId><AgentID>1000004</AgentID></xml>
     */

    xml2json(msgXml,function(err,xmlJson){
        if (err) {
            console.log(pageName,':There is an error from xml2json!');
            return;
        };

        var msgType = xmlJson.xml.MsgType[0];
        console.log(pageName,':msgType:',msgType);
        switch  (msgType){
            case 'text':
                var content = xmlJson.xml.Content[0];
                console.log(pageName,':content:',content);
                break;

        };
        var encryptoMsg = lib.aesMsg.encryptoMsg;
        var corpId = corpInfo.corpId;
        var encodingAesKey = corpInfo.encodingAesKey;
        encryptoMsg(content,corpId,encodingAesKey,function(err,result){
            if (err){
                return;
            };
            var token = corpInfo.token;
            var timestamp = com.common.getTimestamp();
            var nonce = com.common.getNonce(10);
            var signature = sha.signature(token,timestamp,nonce,result);
            console.log(pageName , ':result:' , result);
            var xml = '<xml> ' +
                        '<Encrypt><![CDATA[' + result + ']]></Encrypt>' +
                        '<MsgSignature><![CDATA[' + signature + ']]></MsgSignature>' +
                        '<TimeStamp>' + timestamp + '</TimeStamp>' +
                        '<Nonce><![CDATA[' + nonce + ']]></Nonce>' +
                    '</xml>';
            console.log(pageName, ':xml:', xml);
            resDataCallback(null,xml);
        });
    });
};




