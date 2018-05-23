/**
 * Created by Administrator on 2018/4/25.
 */
'use strict';
var pageName = 'setkey of redis';

var Redis = require('ioredis');
var redis = new Redis();


/**
 *
 * @param key
 * @param value
 */
var setkey = function (key,value){

    redis.set (key,value);
};
module.exports = setkey;
