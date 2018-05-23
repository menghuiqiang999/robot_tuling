/**
 * Created by Administrator on 2018/5/12.
 */
'use strict';
var pageName = 'test3';

var cryptoMsg = require ('./lib/crypto_msg');
var getRandChar= require('./common/get_rand_char');
var verifyMsgSignature = require ('./lib/verify_msg_signature');
var decryptoMsg = require ('./lib/decrypto_msg');

//encrypt: L0dQccD+eXPF62yoi9ThEOO9i4Ffz6QTtVj2KNUO9QW3j8rcnSOwUw9xb7ssk3WJIP/ddvHIeyyLS+9BwcGaVOPdjKLDPvMRAwbPTbBHlmy5aQ5+6YWX1iLizb0X9o39jGox38EPOKQy1ExYxcrHlAFKbqMk183NcFDTj2uTk5+mTG2u+tv2VjoY/TLTALcoK52sx9CNd5lgY4zJ39xKV+zBBj/t0Wv5ZAWBi/qeMT8FDNe07usdm2gqWqmOixmvrQG7UG7ZYUm/tbhCH5/ahwBWtGnQvghQxIivrkiD2xvAY+M+8k9Sg6hX7JU9zbzBWDtfTlFShCI/3y9ubT5WwqnMD85J8w0LAJDIOWEfkSMw5Z7Z5YvGbcVcWE7XnU1irL8WXWzhr6SYGuC+zDa7sYAAxIbXTaDXF2+7oNCVB6A=
var encrypt = 'L0dQccD+eXPF62yoi9ThEOO9i4Ffz6QTtVj2KNUO9QW3j8rcnSOwUw9xb7ssk3WJIP/ddvHIeyyLS+9BwcGaVOPdjKLDPvMRAwbPTbBHlmy5aQ5+6YWX1iLizb0X9o39jGox38EPOKQy1ExYxcrHlAFKbqMk183NcFDTj2uTk5+mTG2u+tv2VjoY/TLTALcoK52sx9CNd5lgY4zJ39xKV+zBBj/t0Wv5ZAWBi/qeMT8FDNe07usdm2gqWqmOixmvrQG7UG7ZYUm/tbhCH5/ahwBWtGnQvghQxIivrkiD2xvAY+M+8k9Sg6hX7JU9zbzBWDtfTlFShCI/3y9ubT5WwqnMD85J8w0LAJDIOWEfkSMw5Z7Z5YvGbcVcWE7XnU1irL8WXWzhr6SYGuC+zDa7sYAAxIbXTaDXF2+7oNCVB6A=';

var postData = '<xml><ToUserName><![CDATA[wwf54870d97f9ee496]]></ToUserName><Encrypt><![CDATA[tbzmauE51i0qOLnQwJQIm8rcIn+mklNeGfRL76reh3JF7f3o82eb3bXnLn3bcgQdJNv5oc0BMzHRZ9u9IE1g4xdGWKQtzoRI55/aJyFNKyfUW/BP61J83DHU2gUFpM3awqrfTl/TwsLOY8TJrrbouYxcPm8MOmUrZhxWNCB7KlHtADlvUSJu3/5euOUh/ttshPegMZ3PFzzmECuBNW6XOz5NhEv1mOEqHhL8F75TZ+p1SL8jG6hBU3teQhoi6OXRpiTBEgRz0rB3MXd39HoCaUA3to4tjDqQUowYIkjytIuwurTf9Bz0kU4uOzAxIC9O8eHn+3mEnLAuig36P9guq11NwRh8gpWvrsBGGAYUup4XuxZGPSMPXCVDDZzV/pGy50BqUiSqM9i39FAkNES+fC0muSJn/tIzeQ/y0QiHdO0=]]></Encrypt><AgentID><![CDATA[1000004]]></AgentID></xml>';

var corpId = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
//var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录
var corpSecret="wE12G6DxXXDGI71khHpEaOBBRulpX4hqwCqBDkOLTM8"; //机器人
var token = 'moonlight';var corpId = "wwf54870d97f9ee496";   //企业微信：深圳XX公司
//var corpsecret = "g3_EqQQtTvWMaOi7HoWZ4-0oqDExr9i3-D-QcXc7Un4";   //通讯录
var corpSecret="wE12G6DxXXDGI71khHpEaOBBRulpX4hqwCqBDkOLTM8"; //机器人
var token = 'moonlight';
//var encodingAESKey = 'DpNwAtixaHQdh1IXTfQdP9c9dBYxUyfCsD1yY2GT3qE';
var encodingAesKey = 'tu11ooBABHM7AToEQkEyYsKKOyHvvahhWROnyrPXlUC';


var corpInfo = {
    corpId : corpId ,
    token :token ,
    encodingAesKey : encodingAesKey
};

/**
 *
 * @param xml - xml from corpweixn
 * @return xmljson -  such as {"xml":{"ToUserName":["wwf54870d97f9ee496"],"AgentID":["1000004"]}}
 * @example
 * xml2json(body,funciotn(){
 *      ......
 * });
 */

var xml2json=function(xml,callback){

    console.log('xml',xml);
    var parseString = require('xml2js').parseString;

    parseString(xml, function (err, result) {
        if (err) {
            console.log(pageName,'There is an error form parseString in xml2json of corpweixin_robot');
        };
        console.log (JSON.stringify(result));
        callback(result);
    });

};

var encrypt = 'tbzmauE51i0qOLnQwJQIm8rcIn+mklNeGfRL76reh3JF7f3o82eb3bXnLn3bcgQdJNv5oc0BMzHRZ9u9IE1g4xdGWKQtzoRI55/aJyFNKyfUW/BP61J83DHU2gUFpM3awqrfTl/TwsLOY8TJrrbouYxcPm8MOmUrZhxWNCB7KlHtADlvUSJu3/5euOUh/ttshPegMZ3PFzzmECuBNW6XOz5NhEv1mOEqHhL8F75TZ+p1SL8jG6hBU3teQhoi6OXRpiTBEgRz0rB3MXd39HoCaUA3to4tjDqQUowYIkjytIuwurTf9Bz0kU4uOzAxIC9O8eHn+3mEnLAuig36P9guq11NwRh8gpWvrsBGGAYUup4XuxZGPSMPXCVDDZzV/pGy50BqUiSqM9i39FAkNES+fC0muSJn/tIzeQ/y0QiHdO0=';

var req={"query": {"msg_signature":"4cb88929976820a6db05a1f95500260471588805","timestamp":"1526204048","nonce":"1526140064", "echostr" : encrypt }};
verifyMsgSignature (req , corpInfo,function(err,result){
    if (err) {
        return;
    };

    console.log ( pageName, ':result:', result);
    //cb477000d2a4fba4943d8f62f5a7064081959dd4


});

/*
decryptoMsg(encrypt,corpInfo,function(err,result){
    xml2json(result,function(callback){});
});
*/
//"msg":"<xml><ToUserName><![CDATA[wwf54870d97f9ee496]]></ToUserName><FromUserName><![CDATA[MengHuiQiang]]></FromUserName><CreateTime>1526202917</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[好]]></Content><MsgId>1629647924</MsgId><AgentID>1000004</AgentID></xml>"