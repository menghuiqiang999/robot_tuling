/**
 * Created by Administrator on 2018/5/11.
 */
'use strict';
var pageName = 'test1';
var com =require ('moonlight_function_common');
var aes = com.crypto.aes;

//----------------------------------------------------------------------------------------------------------------------
// Come from corpweixin

var corpId = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
//var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录
var corpSecret="wE12G6DxXXDGI71khHpEaOBBRulpX4hqwCqBDkOLTM8"; //机器人

var token = 'moonlight';
var encodingAESKey = 'DpNwAtixaHQdh1IXTfQdP9c9dBYxUyfCsD1yY2GT3qE';
//var encodingAESKey = 'tu11ooBABHM7AToEQkEyYsKKOyHvvahhWROnyrPXlUC';
//  tu11ooBABHM7AToEQkEyYsKKOyHvvahhWROnyrPXlUC
//    ?msg_signature=5b507d81ef0bea14c051bc644a5d11ed3f1cf669
// &timestamp=1526084034&nonce=1526201506
// &echostr=jHMzSPr7t5FlCtdjHN3UcKo%2BY1nBclaCSWpVsZr3QFNvHYwmDxxhnvCIKlUj13Scw8AA5mCy9IKK4as00ikWMQ%3D%3D
//----------------------------------------------------------------------------------------------------------------------
// come from corpweixin
/*
var msg_signature='5b507d81ef0bea14c051bc644a5d11ed3f1cf669';
//                    5b507d81ef0bea14c051bc644a5d11ed3f1cf669

var timestamp=1526084034;
var nonce=1526201506;
var echostr = 'jHMzSPr7t5FlCtdjHN3UcKo%2BY1nBclaCSWpVsZr3QFNvHYwmDxxhnvCIKlUj13Scw8AA5mCy9IKK4as00ikWMQ%3D%3D';
*/

var msg_signature='461a4926f648a2f07183db5c1266513f48bd1e45';

var timestamp=1525941745;
var nonce=1526693362;
var echostr = 'Q3Z1hAmsPLk0v15%2BH9mdhIYmKZjtTOde6HCUj91tmqMv%2BF6fZtGvMeNecrdygyalV%2FuKzsgYqDUejyDpZVPIIQ%3D%3D';

//----------------------------------------------------------------------------------------------------------------------

console.log (pageName + ':the original encodeingAESKey:' + encodingAESKey);

var sEncodingAesKey = encodingAESKey + '=';

var bAesKey=Buffer.from (sEncodingAesKey,'base64');
console.log(pageName  + ': bAesKeyiv :' + bAesKey);
console.log (pageName +  ':bAesKey length: ' + bAesKey.length);

var bIv = bAesKey.slice(0,16);


console.log(pageName  + ': bIv :' + bIv);
console.log (pageName +  ':bIv length: ' + bIv.length);



// decodeURI or decodeURIComponent
var decodeUrlEchostr = decodeURIComponent(echostr);
console.log (pageName + ':decodeEchostr:'+ decodeUrlEchostr);
// Q3Z1hAmsPLk0v15+H9mdhIYmKZjtTOde 6HCUj91tmqMv+F6fZtGvMeNecrdygyal V/uKzsgYqDUejyDpZVPIIQ==

// base64  decodeUrlEchostr
var bAesMsg = Buffer.from (decodeUrlEchostr,'base64');
var aesMsg=bAesMsg.toString('base64');
console.log (pageName + ':bAesMsg:' + bAesMsg + ':length:' + bAesMsg.length);
console.log (pageName + ':aesMsg:' + aesMsg + ':length:' + aesMsg.length);

// aes decrypto sEchostr encoding: uft8
var randMsg = aes.decrypto(decodeUrlEchostr,bAesKey,bIv);
console.log (pageName + ':randMsg:' + randMsg );
// adcedac8722fac32 1114 58762853455863 wwf54870d97f9ee496
// f4222c3e8c6e988f 6784 695015143011799 wwf54870d97f9ee496

var lenCorpId = corpId.length;


var bRandMsg = Buffer.from(randMsg);
var lenBRandMsg=bRandMsg.length;
console.log (pageName + ':bRandMsg length:' + lenBRandMsg);

var bA = bRandMsg.toString('ascii');
console.log (pageName + ':bA:' + bA);
var bRandom =bRandMsg.slice(0,16);
var bMsgLen = bRandMsg.slice(20,24);
var bMsg = bRandMsg.slice(24,(lenBRandMsg-lenCorpId));
var bF = bRandMsg.slice(16,20);
var msgLen = bMsgLen.toString();
console.log (pageName + ':msgLen:' + msgLen);
console.log (pageName + ':bMsgLen:' + bMsgLen);
console.log (pageName + ':bRandom:' + bRandom);
console.log (pageName + ':bMsg:' + bMsg);
console.log (pageName + ':bF:' + bF);

var bA16 = bRandMsg.slice(16,17);
var bA17 = bRandMsg.slice(17,18);
var bA18 = bRandMsg.slice(18,19);
var bA19 = bRandMsg.slice(19,20);
var bA20 = bRandMsg.slice(20,21);
var bA21 = bRandMsg.slice(21,22);
var bA22 = bRandMsg.slice(22,23);
var bA23 = bRandMsg.slice(23,24);
var bA24 = bRandMsg.slice(24,25);

console.log(pageName + ':16:' + bA16 + ':17:' + bA17 + ':18:' + bA18 + ':19:'+ bA19 + ':20:' + bA20   );

console.log(pageName + ':21:' + bA21 + ':22:' + bA22 + ':23:' + bA23 + ':24:' + bA24 );
console.log(bRandMsg);
//<Buffer 66 34 32 32 32 63 33 65 38 63 36 65 39 38 38 66
//        00 00 00 13 36 37 38 34
//        36 39 35 30 31 35 31 34 33 30 31 31 37 39 39
//        77 77 66 35 34 38 37 30 64 39 37 ...
//10011110 00000111 00110100 10101101 10011101 01110101 11
//11000000011101011001110110101101001101000000011110011110
//----------------------------------------------------------------------------------------------------------------------
//Verify message signature
var sha= com.crypto.sha;

var arrayStr=[token,timestamp,nonce,decodeUrlEchostr];
var content=arrayStr.sort().join('');

//var contentStr = token + timestamp + nonce + decodeUrlEchostr;
//console.log(pageName +':contentStr:' +contentStr);

//var content = contentStr.split('').sort().join('');

//console.log ('content:' + content +  ':' + pageName);



var devMsgSignature=sha.sha1(content);

console.log (pageName + ':devMsgSignature:' + devMsgSignature);
    //461a4926f648a2f07183db5c1266513f48bd1e45

