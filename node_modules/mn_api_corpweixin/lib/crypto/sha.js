/**
 * Created by Administrator on 2018/5/15.
 */
'use strict';
var pageName = 'sha';

const com = require ('mn_fun_comm');
const crypto=com.crypto;
var sha = function () {};
module.exports = sha;
/**
 *
 * @param token
 * @param timestamp
 * @param nonce
 * @param encrypted
 * @returns shaSign
 * @example
 * var msgSignature = sha.signature(token,timestamp,nonce,encrypted);
 */


sha.signature = function (token,timestamp,nonce,encrypted) {
    const sha1=crypto.sha.sha1;
    var arrayStr=[token,timestamp,nonce,encrypted];
    var content=arrayStr.sort().join('');
    var shaSign = sha1(content);
    console.log (pageName + ':shaSignature:' + shaSign);
    return shaSign;
};

