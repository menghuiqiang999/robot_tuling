/**
 * Created by Administrator on 2018/5/21.
 */
'use strict';
var pageName = 'upload_material';
var request = require('request');
var fs = require('fs');
var formstream = require ('formstream');

var file= function(){

};
module.exports = file;


/**
 *
 * @param url{string}      -  such as https://www......?.......
 * @param nameType {string}    - 'media' neet the request of server
 * @param filePathName {string}  - include the dir and the file name ,such as ../images/output.jpg
 * @param fileUploadName {string} - file name in the server you want to upload
 * @return resCallback  {object} - res come back form server you uploaded
 * @example
 * upload (url,nameType,filePathName,fileUploadName,function(err,resResult){
 *
 * });
 */

file.upload = function (url,nameType,filePathName,fileUploadName,resCallback){
    fs.stat(filePathName,function(err,stat){
        var form = formstream();
        form.file(nameType , filePathName , fileUploadName , stat.size);
        var uploadFile = request.post(url,{headers:form.headers()},function(err,req,res){
            if (err) {
                resCallback(err);
                return console.err('上传失败',err);
            }
            //console.log(req);
            console.log('服务器结果：', res);
            resCallback(null,res);
        });
        form.pipe(uploadFile);
    });
};

/**
 *
 * @param url {string}    such as : http://www...........output.jpg
 * @param dir {string}   - the dir you want to save this file
 * @param fileName {string} - the file name you want to save
 * @example
 *
 * download(url,dir,fileName);
 *
 */
file.download = function(url,dir,fileName){
    //采用request模块，向服务器发起一次请求，获取图片资源
    request.head(url,function(err,res,body){
        if(err){
            console.log(err);
        }
    });
    request(url).pipe(fs.createWriteStream(dir + fileName));
};
/**
 *
 * @param url {string}    such as : http://www...........output.jpg
 * @param dir {string}   - the dir you want to save this file
 * @param fileName {string} - the file name you want to save
 * @param callback
 * @example
 *
 * downloadFile(url,dir,fileName,function(err,result){
 *
 * });
 */

file.downloadFile = function(url,dir,fileName,callback){
    //采用request模块，向服务器发起一次请求，获取图片资源
    request.head(url,function(err,res,body){
        if(err){
            console.log(err);
            return callback(err);
        }
    });
    var fn = fs.createWriteStream(dir + fileName)
    request(url).pipe(fn);
    fn.on('finish',function(){
        callback(null,true);
    });
    fn.on('error', function (err) {
        callback(err);
    })

};
//----------------------------------------------------------------------------------------------------------------------
/**
 *
 * @param urlDownload {string}  - url you want to download ,such as http:// .... or https://...
 * @param urlUpload {string}  - url you want to uppload ,such as http://... or https://
 * @param fieldName {string}  -   name of form field
 * @param fileName {string} -  file name you want to save in the server
 * @param resCallback
 * @example
 * downUpload(urlDown,urlUp,'media',fileName,function(err,result){
 *
 * });
 *
 */
file.downUpload = function (urlDownload,urlUpload,fieldName,fileName,resCallback) {
    var dir='./';
    file.downloadFile(urlDownload,dir,fileName,function(err,result){
        if (err){
          return resCallback(err);
        };
        if (result) {
            var filePathName = dir + fileName;
            fs.stat(filePathName,function(err,stat){
                var jpg= fs.createReadStream(dir+fileName);
                var form = formstream();
                //form.stream(fieldName,jpg,fileName,{headers:form.headers()},jpg.readableLength);

                form.file(fieldName , dir+fileName , fileName , stat.size);
                var uploadFile = request.post(urlUpload,{headers:form.headers()},function(err,req,res){
                    if (err) {
                        resCallback(err);
                        return console.err('上传失败',err);
                    }
                    //console.log(req);
                    console.log('服务器结果：', res);

                    fs.unlink(filePathName,function(err){
                        if (err) {
                            return resCallback(err);
                        };
                        resCallback(null,res);
                    });
                });
                form.pipe(uploadFile);
            });
        };

    });
};

