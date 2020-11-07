/*
 * @Description: 
 * @Author: shengnan
 * @Date: 2020-11-05 14:11:11
 * @LastEditors: shengnan
 * @LastEditTime: 2020-11-05 22:19:23
 */
//ajax请求获取到文章数据
function getList(data,fn){
  $.ajax({
    type:'get',
    url:'/my/article/list',
    data:data,
    success:function(res){
      fn(res);
    }
  });
}
//ajax请求获取到文章分类数据
function getCategoryList(fn){
  $.ajax({
    type:'get',
    url:'/my/article/cates',
    success:function(res){
      fn(res);
    }
  });
}
//ajax请求添加文章
function add(data,fn){
  $.ajax({
    type:'post',
    url:'/my/article/add',
    data:data,
    processData:false,
    contentType:false,
    success:function(res){
      fn(res);
    }
  });
}

//ajax请求修改文章分类
function update(data,fn){
  $.ajax({
    type:'post',
    url:'/my/article/edit',
    data:data,
    processData:false,
    contentType:false,
    success:function(res){
      fn(res);
    }
  });
}

//ajax请求删除文章分类
function remove(id,fn){
  $.ajax({
    type:'GET',
    url:'/my/article/delete/' + id,
    success:function(res){
      fn(res);
    }
  });
}

function getById(id,fn){
  $.ajax({
    type:'get',
    url:'/my/article/' + id,
    data:{
      id:id
    },
    success:function(res){
      fn(res);
    }
  });
}
