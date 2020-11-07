/*
 * @Description: 
 * @Author: shengnan
 * @Date: 2020-11-05 21:49:40
 * @LastEditors: shengnan
 * @LastEditTime: 2020-11-05 22:25:46
 */
var $image = $('#image');
var options = {
  aspectRatio: 400 / 280,
  preview: '.img-preview',
  autoCropArea: 1
};
$image.cropper(options);

let form = layui.form;
let id = new URLSearchParams(location.search).get('id');
getCategoryList(function(res){
  let str = template('tpl-categroy',res);
  $('select[name=cate_id]').append(str);
  form.render(); 
  getById(id,function(res){
    form.val('edit-form',res.data);
    initEditor();
    $image.cropper('destroy').attr('src','http://ajax.frontend.itheima.net' + res.data.cover_img).cropper(options);
  })
});

$('#cover').on('click',function(e){
  $('#cover-file').trigger('click');
})
$('#cover-file').on('change',function(e){
  let fileObj = this.files[0];
  let url = URL.createObjectURL(fileObj);
  $image.cropper('destroy').attr('src',url).cropper(options);
})

$('#edit-form').on('submit',function(e){
  e.preventDefault();
  let fd = new FormData(this);
  //获取富文本内容
  let content = tinyMCE.activeEditor.getContent();
  fd.set('content',content);
  fd.append('Id',id)

  //获取剪裁后的封面图片
  let canvas = $image.cropper('getCroppedCanvas',{
    width:480,
    height:200
  });
  canvas.toBlob(function(blob){
    fd.append('cover_img',blob);
    update(fd,function(res){
      layer.msg(res.message);
      if(status == 0){
        location.href = '/article/article-list.html';
      }
    })
  })
});

