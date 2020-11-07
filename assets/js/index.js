//获取用户信息,并将用户信息头像/姓名信息渲染至界面上
renderUserInfo();
function renderUserInfo(){
  getUserInfo(function(res){
    if(res.status == 0) {
      let data = res.data;
      localStorage.setItem('userinfo',JSON.stringify(data));
      
      let name = data.nickname || data.username;
      $('.userinfo .name').html(name);
      if(!data.user_pic){
        $('.avatar-text').show().html(name.substr(0,1)).next().hide();
      } else {
        $('.avatar-img').show().attr('src',data.user_pic).prev().hide();
      }
    }
  });
}

//退出
exit();
function exit(){
  $('.exit').on('click',function(e){
    e.preventDefault();
    layer.confirm('您确认要退出吗?', function(){
      localStorage.removeItem('token');
      location.href = '/login.html';
    });
  })
}
