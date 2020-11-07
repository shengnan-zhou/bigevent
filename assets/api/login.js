//**************用户注册功能实现************ */
function register(){
  $('.register form').on('submit',function(e){
    e.preventDefault();
    let fd = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: 'http://ajax.frontend.itheima.net/api/reguser',
      data: fd,
      success: function(res){
        layer.msg(res.message);
        if(res.status == 0) {
          $('.login').show().next().hide();
        }
      }
    });
  })
}

//**************用户登录功能实现************ */
function login(){
  $('.login form').on('submit',function(e){
    e.preventDefault();
    let fd = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: 'http://ajax.frontend.itheima.net/api/login',
      data: fd,
      success: function(res){
        layer.msg(res.message);
        if(res.status == 0) {
         //登录成功后,跳转至index页面,并报错token至LocalStorage中
         localStorage.setItem('token',res.token);
         location.href = '/index.html';
        }
      }
    });
  })  
}
