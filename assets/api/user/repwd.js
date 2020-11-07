/*
 * @Description: 
 * @Author: shengnan
 * @Date: 2020-11-04 21:46:01
 * @LastEditors: shengnan
 * @LastEditTime: 2020-11-07 19:54:26
 */
// 重置密码
function repwd(data,fn){
    $.ajax({
      type:'post',
      url:'/my/updatepwd',
      data:data,
      success:function(res){
       fn(res);
      }
  })
}