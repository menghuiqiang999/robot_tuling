/**
 * Created by Administrator on 2018/5/14.
 */
'use strict';
var pageName = 'common';

var getNonce = require ('./get_nonce');
exports.getNonce = getNonce;

var getRandChar = require('./get_rand_char');
exports.getRandChar = getRandChar;

var getTimestamp = require ('./get_timestamp');
exports.getTimestamp =getTimestamp;


var translateOptionsCallback = require ('./translate_options_callback');
exports.translateOptionsCallback = translateOptionsCallback;


