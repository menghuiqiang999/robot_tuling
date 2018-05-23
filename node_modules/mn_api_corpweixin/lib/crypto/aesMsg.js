/**
 * Created by Administrator on 2018/5/15.
 */
'use strict';
var pageName = 'aes';

var aes = function () {};
module.exports = aes;

const com = require ('mn_fun_comm');
const crypto=com.crypto;

//----------------------------------------------------------------------------------------------------------------------
/**
 *
 * @param ecrypted
 * @param corpId
 * @param encodingAesKey
 * @param callback
 * @example
 *
 * decryptoMsg (ecrypted,corpId,encodingAesKey,function(err,result){
 *  .   ......
 * });
 *
 *
 */
aes.decryptoMsg = function (crypted,corpId,encodingAesKey,callback){
    const aes =crypto.aes;

    // Decode base64 encodingAesKey
    var sEncodingAesKey = encodingAesKey + '=';
    var bAesKey=Buffer.from (sEncodingAesKey,'base64');
    console.log( pageName + ':bAesKey: ' + bAesKey + ':lenght:' + bAesKey.length);
    // Fetch front 16 byte to iv
    var bIv = bAesKey.slice(0,16);
    console.log (pageName + ':bIv: ' + bIv + ':length:' + bIv.length);

    // aes decrypto base64 output randMsg encoding: uft8
    var randMsg = aes.decrypto(crypted,bAesKey,bIv);

    decomposeRandMsg(randMsg,corpId,callback);
};

//----------------------------------------------------------------------------------------------------------------------
aes.encryptoMsg = function (msg,corpId,encodingAesKey,callback){

    const encrypto = crypto.aes.encrypto;

    // Decode base64 encodingAesKey
    var sEncodingAesKey = encodingAesKey + '=';
    var bAesKey=Buffer.from (sEncodingAesKey,'base64');
    console.log( pageName + ':bAesKey: ' + bAesKey + ':lenght:' + bAesKey.length);
    // Fetch front 16 byte to iv
    var bIv = bAesKey.slice(0,16);
    console.log (pageName + ':bIv: ' + bIv + ':length:' + bIv.length);

    composeRandMsg(msg,corpId,function(err,randMsg){


        var encrypted = encrypto(randMsg,bAesKey,bIv);

        callback(null,encrypted);

    });

};

function composeRandMsg (msg,corpId,callback) {

    var getRandChar = com.common.getRandChar;
    var randChar =  getRandChar(16);
    var len = msg.length;
    var lenRandMsg = len + corpId.length + 20;

    var b=Buffer.alloc (lenRandMsg);
    b.write (randChar,0,16);
    b.writeIntBE (len,16,4);
    b.write (msg,20,len);
    b.write (corpId,len+20);
    console.log(b);
    var randMsg = b.toString();
    callback(null,randMsg);

};

function decomposeRandMsg (randMsg,corpId,callback){

    // Caculate the len of msg

    var lenCorpId = corpId.length;
    var bRandMsg = Buffer.from(randMsg);
    console.log(bRandMsg);
    var lenBRandMsg= bRandMsg.length;    // len of total bRandMsg;

    if (lenBRandMsg > (lenCorpId + 20) ) {
        var bMsg = bRandMsg.slice(20,(lenBRandMsg-lenCorpId));
        var msg = bMsg.toString();
    }
    else{
        callback ('ecrypted is a wrong input! ',null);
    };

    console.log (pageName + ':msg:' + JSON.stringify(msg));
    callback (null,msg);

};