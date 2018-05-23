/**
 * Created by Administrator on 2018/5/16.
 */
'use strict';
var pageName = 'get_timestamp';

/**
 * @module timestamp
 * @returns {number} - return a timestamp , the seconds from 1-1-1970
 * @example
 *  var timestamp = getTimestamp ();
 */

var getTimestamp = function () {

    var timestamp = Math.floor((new Date().getTime())/1000);
    
    return timestamp;
};
module.exports = getTimestamp;
