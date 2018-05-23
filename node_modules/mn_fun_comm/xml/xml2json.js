/**
 * Created by Administrator on 2018/5/14.
 */

/**
 *
 * @param xml - xml from corpweixn
 * @return xmljson -  such as {"xml":{"ToUserName":["wwf54870d97f9ee496"],"AgentID":["1000004"]}}
 * @example
 * xml2json(xml,funciotn(err,jsonCallback){
 *      ......
 * });
 */
'use strict';
var pageName = 'xml2json';
var parseString = require('xml2js').parseString;

var xml2json=function(xml,callback){
    parseString(xml, function (err, result) {
        if (err) {
            console.log(pageName,'There is an error form parseString in xml2json of corpweixin_robot');
            callback(err,null);
            return;
        };
        console.log (JSON.stringify(result));
        callback(null,result);
    });
};
module.exports = xml2json;