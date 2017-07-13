
  var until = {
    host: document.location.protocol+"//192.168.61.32:8080" ,
    // host: document.location.protocol+"//192.168.1.101:8080",
    // host: document.location.protocol+"//"+document.location.host;
    get: function (url, callback) {
      $.ajax({
        type: "get",
        url: until.host + url,
        dataType: 'jsonp',
        jsonp: 'callback',
        async: true,
        cache: true,
        success: function (data) {
          return callback(data);
        },
        complete: function (data) {

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log("服务器错误" + XMLHttpRequest.status);     //捕获http相应状态;1xx-5xx
          console.log("请求失败" + XMLHttpRequest.readyState);  //返回http请求的当前状态 0-4
          console.log(textStatus);                              //解析错误类型 "null" "timeout", "error", "notmodified" 和 "parsererror"。
        }

      });
    },
    post: function (url, data, callback) {
      $.ajax({
        type: "post",
        url: until.host + url,
        data: data,
        xhrFields: {withCredentials: true},
        crossDomain: true,
        dataType: 'json',
        async: true,
        success: function (data) {
          return callback(data);
        },
        complete: function (data) {

        },
        error: function () {

        }
      });
    },
    put: function (url, data, callback) {
      $.ajax({
        type: "post",
        url: until.host + url,
        data: data,
        cache: true,
        dataType: 'json',
        async: true,
        success: function (data) {
          return callback(data);
        },
        complete: function (data) {

        },
        error: function () {

        }
      });
    }
  }

 until.post('/buyer/person/account/nick/change',{nickName:2222},function(data){
    if (!data.code) {
           console.log('success')
     }
     else {
           console.log('fail')
     }
   });
//这个为什么也能跨域？！肯定是服务器那端设置了！
 var lost_ss=location.protocol+"//"+window.location.host+"/b2b_pc/static/view/callback/callback.html";
    $.ajax({
      url: until.host + '/buyer/fblogin/bindaccount',
      method: 'POST',
      data:{"callbackHtml":lost_ss},
      success:function (data) {
        console.log(data)
        if(data.code == 0){
          // Fshop.openFacebook(data.data);
        }
      }
    });