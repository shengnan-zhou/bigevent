$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  options.url = 'http://ajax.frontend.itheima.net' + options.url;
  if(options.url.includes('/my/')){
    options.headers = {
      Authorization : localStorage.getItem('token')
    }
    options.complete = function(xhr){
      if(xhr.responseJSON && xhr.responseJSON.status == 1 && xhr.responseJSON.message == '身份认证失败！'){
        localStorage.removeItem('token');
        location.href = '/login.html';
      }
    }
  }
});