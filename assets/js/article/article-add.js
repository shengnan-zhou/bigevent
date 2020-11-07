let form = layui.form;
//初始化富文本编辑器
initEditor();

//初始化剪裁工具
var $image = $('#image');
var options = {
  aspectRatio: 400 / 280,
  preview: '.img-preview'
};
$image.cropper(options);

$('#cover').on('click',function(e){
  $('#cover-file').trigger('click');
})
$('#cover-file').on('change',function(e){
  let fileObj = this.files[0];
  let url = URL.createObjectURL(fileObj);
  $image.cropper('destroy').attr('src',url).cropper(options);
})

//初始化设置文章分类下拉菜单
getCategoryList(function(res){
  let str = template('tpl-categroy',res);
  $('select[name=cate_id]').append(str);
  form.render(); 
});

$('#add-form').on('submit',function(e){
  e.preventDefault();
  let fd = new FormData(this);
  //获取富文本内容
  let content = tinyMCE.activeEditor.getContent();
  fd.set('content',content);

  //获取剪裁后的封面图片
  let canvas = $image.cropper('getCroppedCanvas',{
    width:480,
    height:200
  });
  canvas.toBlob(function(blob){
    fd.append('cover_img',blob);
    add(fd,function(res){
      layer.msg(res.message);
      location.href = '/article/article-list.html';
    })
  })
});