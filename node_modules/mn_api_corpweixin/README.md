#This is a function from Moonlight
##Prerequisite:
               Rewquire: moonlight_function_errplace use: npm install moonlight_function_errplace
               Require: moonlight_function_common use: npm install moonlight_function_common

#Basic Usage
##install
    npm install moonlight_api_corpweixin --save

##access_token:
Usage:

    access_token(corpid,corpsecret,function(result_callback){
            ......
    };

Callback: access_token.type string.
Such as :
H6_udam4w2OIG6MSpGlAOfeEvoapcnSQGpaivJuXFpthGaGDcVLKUGdVqgh8g0Z5Vg91owLduXcChxPOscBM0Pp1ee-DX4kqh632FVIj-_DZMxSSJNKrkBL3szcowdWRFioD3OUMamyn5DxPE-wYa_krNVC7msIfo3SSYzmQc0QTZTxnusDyS3VqDwqZm4fGW0C9uuvIg7djAk8b5LrWhQ



##get_user
usage:

    get_user(access_token,userid,function(user_callback){
        ......
    };

Callback:Callback info is from corpweixin.     http://work.weixin.qq.com/api/doc#10019
Type format: string

If you want to use a Json format: use

   JSON.parse(user_data_callback);



##get_dept_list
usage:

    get_dept_list(access_token,dept_id,function(dept_list_callback){
        ......
    };

http://work.weixin.qq.com/api/doc#10093


##get_dept_user_list

Usage:

    get_dept_user_list(access_token,dept_id,fetch_child,function(dept_user_list_callback){
        ......
    };

fetch_child: 1 or 0, is mean if enumerate to get the user.
http://work.weixin.qq.com/api/doc#10061



##get_dept_user_list_detail

Usage:

    get_dept_user_list(access_token,dept_id,fetch_child,function(dept_user_list_callback){
        ......
    };

fetch_child: 1 or 0, is mean if enumerate to get the user.
http://work.weixin.qq.com/api/doc#10061


##get_userinfo_by_code
Usage:

    get_userinfo_by_code(access_token,code,function(data_callback){
            console.log(page_name+":the datacallback:"+data_callback)
    })




http://work.weixin.qq.com/api/doc#10028#mn_api_corpweixin
