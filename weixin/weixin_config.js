/**
 * Created by Administrator on 2018/5/10.
 */
'use strict';
var pageName = 'weixin_config';

var config = {
    token: 'moonlight',
    appid: 'wx81fffa724da242ae',
    encodingAESKey: 'CaXJdEiXWsLMpTBaLOVwuUeT9MS8bpx8XZD8vt1XyIn ',
    checkSignature: true // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，
    // 所以如要使用该测试工具，请将其设置为false


};

var weixinConfig = function (configCallback) {
    configCallback(config);
};


module.exports = weixinConfig;
