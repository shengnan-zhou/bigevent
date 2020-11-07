/*
 * @Description: 
 * @Author: shengnan
 * @Date: 2020-11-04 22:15:52
 * @LastEditors: shengnan
 * @LastEditTime: 2020-11-07 19:48:09
 */
// ***************更改用户**************
function updateUserInfo(data,fn){
  $.ajax({
    type:'post',
    url: '/my/userinfo',
    data:data,
    success:function(res){
      fn(res);
    }
  });
}
function resetUserInfo(fn){
  $('button:contains("重置")').on('click',function(e) {
    e.preventDefault();
    fn(JSON.parse(localStorage.getItem('userinfo')));
  })
}
