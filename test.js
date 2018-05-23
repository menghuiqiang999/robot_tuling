/**
 * Created by Administrator on 2018/5/10.
 */
'use strict';
var pageName = 'test ';

//var receiveMsgFromWeixin = require ('./weixin/receive_msg_from_weixin');


//msg_signature=aae0806efb59469c07a555b8d832f97417f5150d&timestamp=1526186428&nonce=1526724096


/**
 *
 * @param body - xml from corpweixn
 * @return xmljson -  such as {"xml":{"ToUserName":["wwf54870d97f9ee496"],"AgentID":["1000004"]}}
 * @example
 *
 */

var xml2json=function(body){

    var body= "{'<xml> <ToUserName><![CDATA[wwf54870d97f9ee496]]></ToUserName> <AgentID><![CDATA[1000004]]></AgentID> </xml>'}";

    var sbody = body.trim();
    var len = sbody.length;
    var xml= sbody.slice(2,len-2);
    console.log('xml',xml);
    var parseString = require('xml2js').parseString;

    parseString(xml, function (err, result) {
        console.log (JSON.stringify(result));
        return result;
    });

};