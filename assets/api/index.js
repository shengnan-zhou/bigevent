function getUserInfo(fn){
  let token = localStorage.getItem('token');
  $.ajax({
    type:'get',
    url:'/my/userinfo',
    headers:{
      Authorization:token
    },
    success:function(res){
      fn(res);
    }
  });
}