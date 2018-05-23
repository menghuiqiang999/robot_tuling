/**
 * Created by Administrator on 2018/4/26.
 * 
 */
'use strict';
var pageName="com";

var common = require ('./common/common');
exports.common = common;

var crypto = require('./crypto/crypto');
exports.crypto = crypto;

var http = require('./http/http');
exports.http = http;


var https = require('./https/https');
exports.https = https;

var mongodb = require ('./mongodb/mongodb') ;
exports.mongodb = mongodb;

var redis = require('./redis/redis');
exports.redis = redis;

var xml = require('./xml/xml');
exports.xml = xml;

