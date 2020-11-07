let form = layui.form;
//获取全部文章分类列表
get();
function get(){
  getList(function(res){
    let str = template('tpl-list',res);
    $('tbody').html(str);
  });
}
//添加文章分类表单渲染
let addIndex;
$('.add-category').on('click',function(e){
  addIndex = layer.open({
    type:1,
    title: '添加文章分类',
    content: template('tpl-add',{}),
    area:['500px','300px']
  });     
});
//添加文章分类
$('body').on('submit','#add-form',function(e){
  e.preventDefault();
  let fd = $(this).serialize();
  add(fd,function(res){
    layer.msg(res.message);
    if(res.status == 0) {
      layer.close(addIndex);
      get();
    }
  });
});

//编辑文章分类表单渲染
let editIndex;
$('tbody').on('click','#edit',function(e){
  let data = $(e.target).data();
  editIndex = layer.open({
    type:1,
    title: '编辑文章分类',
    content: template('tpl-edit',{}),
    area:['500px','300px']
  });     
 form.val('edit-form',data);
});

//更新文章分类
$('body').on('submit','#edit-form',function(e){
  e.preventDefault();
  let fd = $(this).serializeArray();
  let index = fd.findIndex(function(item,index){
    return item.name=='id';
  });
  fd[index].name = 'Id';
  update(fd,function(res){
    layer.msg(res.message);
    if(res.status == 0) {
      layer.close(editIndex);
      get();
    }
  });
});

//删除文章分类
$('body').on('click','#del',function(e){
  e.preventDefault();
  let id = $(e.target).data('id');
  layer.confirm('您确认要删除该条数据吗?', function(){
    remove(id,function(res){
      layer.msg(res.message);
      get();
    })
  });
});
