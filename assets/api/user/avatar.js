/*
 * @Description: 
 * @Author: shengnan
 * @Date: 2020-11-05 08:51:43
 * @LastEditors: shengnan
 * @LastEditTime: 2020-11-05 10:38:55
 */
function update(data,fn){
  $.ajax({
    type:'post',
    url:'/my/update/avatar',
    data:data,
    success:function(res){
      fn(res)
    }
  });
}