let form = layui.form;
// 将获取的用户信息回填到界面上
renderUserInfo();
let userinfo = JSON.parse(localStorage.getItem('userinfo'));
form.val('userinfo-form',userinfo);

//更新用户信息
$('#userinfo-form').on('submit',function(e){
  e.preventDefault();
  let fd = $(this).serialize();
  updateUserInfo(fd,function(res){
    layer.msg(res.message);
    if(res.status == 0) {
      window.parent.renderUserInfo(res.data);
    }
  })
});


//重置表单用户信息
resetUserInfo(function(data){
  form.val('userinfo-form',data);
});