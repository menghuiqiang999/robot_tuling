/**
 * Created by Administrator on 2018/5/16.
 */
'use strict';
var pageName = 'get_nonce';


/**
 *
 * @param len
 * @returns {number} - ruturn a rand number, the number of digits is len
 * @example
 * var nonce = getNonce(10);
 */
var getNonce = function (len) {
    var rand = Math.random();
    while (rand < 1) {
        rand = rand * 10;
    };
    for (var i=0;  i < len-1; i ++){
        rand=rand * 10;
    };
    rand=Math.floor(rand);
    return rand;
};
module.exports = getNonce;
