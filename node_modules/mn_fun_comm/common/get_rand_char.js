/**
 * Created by Administrator on 2018/5/12.
 * @module getRandChar - generate a rand char, the digit is len.
 * @param len {integer } must > 1
 * @return getRandChar - rand char , len digit
 * @example
 *
 * var len = getRandChar(16);
 *
 */
'use strict';
var pageName = 'get_rand_char';

var getRandChar = function (len) {
    var chars ="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (len > 1){
        var maxPo = chars.length;
        var randChar = '';
        for (var i =0; i< len ;i ++ ) {
            randChar += chars.charAt(Math.floor(Math.random()*maxPo));
        };
        return randChar;
    };
};

module.exports = getRandChar;