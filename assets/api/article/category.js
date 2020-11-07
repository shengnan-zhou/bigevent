//ajax请求获取到文章分类数据
function getList(fn){
  $.ajax({
    type:'get',
    url:'/my/article/cates',
    success:function(res){
      fn(res);
    }
  });
}
//ajax请求添加文章分类
function add(data,fn){
  $.ajax({
    type:'post',
    url:'/my/article/addcates',
    data:data,
    success:function(res){
      fn(res);
    }
  });
}

//ajax请求修改文章分类
function update(data,fn){
  $.ajax({
    type:'post',
    url:'/my/article/updatecate',
    data:data,
    success:function(res){
      fn(res);
    }
  });
}

//ajax请求删除文章分类
function remove(id,fn){
  $.ajax({
    type:'GET',
    url:'/my/article/deletecate/' + id,
    success:function(res){
      fn(res);
    }
  });
}
