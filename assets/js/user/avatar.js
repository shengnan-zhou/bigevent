/*
 * @Description: 
 * @Author: shengnan
 * @Date: 2020-11-05 08:51:53
 * @LastEditors: shengnan
 * @LastEditTime: 2020-11-07 20:05:12
 */
// 1.1 获取裁剪区域的 DOM 元素
let $image = $('#image');

// 1.2 配置选项
const options = {
  // 纵横比
  aspectRatio: 1,
  // 指定预览区域
  preview: '.img-preview'
}
 // 1.3 创建裁剪区域
 $image.cropper(options);


function uploadAvatar() {
  $('button:contains("上传")').on('click',function(e){
    $('#file').trigger('click');
  });
  $('#file').on('change',function(e){
    let fileObj = this.files[0];
    if(fileObj) {
      let url = URL.createObjectURL(fileObj);
      $('#image').cropper('destroy').attr('src',url).cropper(options);
    }
  });
  $('button:contains("确定")').on('click',function(e){
    let canvas = $image.cropper('getCroppedCanvas',{
      width:100,
      height:100
    });
    let base64 = canvas.toDataURL('image/png');
    let data = {
      avatar:base64
    };

    //发送Ajax请求,更新头像
    update(data,function(res){
      layer.msg(res.message);
      window.parent.getUserInfo(function(res){
        if(res.status == 0) {
          window.parent.renderUserInfo(res.data);
        }
      });
    });
  })
}
//选择头像
uploadAvatar();