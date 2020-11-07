let form = layui.form;
let laypage = layui.laypage;
//获取文章分类列表
let data = {
  pagenum:1,
  pagesize:5
};
get();
function get(){
  getList(data,function(res){
    let str = template('tpl-list',res);
    $('tbody').html(str);
    renderPage(res);
  });
}
function renderPage(res){
  laypage.render({
    elem: 'page',
    count: res.total, //数据总数，从服务端得到
    limit:data.pagesize,
    limits:[1,2,3,4,5],
    layout:['limit','prev', 'page', 'next', 'count'],
    jump: function(obj, first){
      //首次不执行
      if(!first){
        //do something
        data.pagenum = obj.curr;
        data.pagesize = obj.limit;
        getList(data,function(res){
          let str = template('tpl-list',res);
          $('tbody').html(str);
        });
      }
    }
  });
}
//筛选符合条件的文章列表
$('#filter-form').on('submit',function(e){
  e.preventDefault();
  let cate_id = $('select[name=cate_id]').val();
  let state =  $('select[name=state]').val();
  data.cate_id = cate_id;
  data.state = state;
  get();
})

//获取文章分类并渲染下拉菜单
getCategoryList(function(res){
  let str = template('tpl-categroy',res);
  $('select[name=cate_id]').append(str);
  form.render(); 
})

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

// //编辑文章分类表单渲染
// let editIndex;
// $('tbody').on('click','#edit',function(e){
//   let data = $(e.target).data();
//   editIndex = layer.open({
//     type:1,
//     title: '编辑文章分类',
//     content: template('tpl-edit',{}),
//     area:['500px','300px']
//   });     
//  form.val('edit-form',data);
// });

// //更新文章分类
// $('body').on('submit','#edit-form',function(e){
//   e.preventDefault();
//   let fd = $(this).serializeArray();
//   let index = fd.findIndex(function(item,index){
//     return item.name=='id';
//   });
//   fd[index].name = 'Id';
//   update(fd,function(res){
//     layer.msg(res.message);
//     if(res.status == 0) {
//       layer.close(editIndex);
//       get();
//     }
//   });
// });
//触发编辑按钮,跳转至编辑页面
$('tbody').on('click','#edit',function(e){
  e.preventDefault();
  let id = $(e.target).data('id');
  location.href = '/article/article-edit.html?id='+id;
})

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
