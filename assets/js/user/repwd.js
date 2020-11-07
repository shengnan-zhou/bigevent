/*
 * @Description: 
 * @Author: shengnan
 * @Date: 2020-11-04 21:20:36
 * @LastEditors: shengnan
 * @LastEditTime: 2020-11-07 19:54:19
 */
let form = layui.form;
//**************注册界面表单验证************ */
form.verify({
  diff:function(val){
    if($('input[name=newPwd]').val()!==val){
      return '确认密码和新密码不一致!';
    }
  },
  same:function(val){
    if($('input[name=oldPwd]').val()==val){
      return '新密码和原密码不能相同!'
    }
  }
});

//重置密码
$('#repwd-form').on('submit',function(e){
  e.preventDefault();
  let fd = $(this).serialize();
  repwd(fd,function(res){
    layer.msg(res.message);
    if(res.status == 0) {
      $('#repwd-form')[0].reset();
    }
  })
});