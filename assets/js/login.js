//加载layui模块
let form = layui.form;

//**************切换登录/注册界面************ */
$('.to-register').on('click',function(){
  $('.login').hide().next().show();
});
$('.to-login').on('click',function(){
  $('.login').show().next().hide();
});

//**************注册界面表单验证************ */
form.verify({
  len:[/^\S{6,12}$/,'用户名需要为6-12位,且不能为空'],
  same:function(val){
    if($('.register input[name=password]').val()!==val){
      return '确认密码和密码不一致';
    }
  }
});

