/**
 * Created by Administrator on 2018/4/25.
 */
"use strict";
var pageName="https";

var file = require ('./file');
exports.file = file;

var get = require('./get');
exports.get = get;

var post = require('./post');
exports.post = post;

var postNoHeader = require('./post_no_header');
exports.postNoHeader = postNoHeader;