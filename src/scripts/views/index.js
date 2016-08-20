var indexTpl=require('../tpls/index.string');

//定义视图
SPA.defineView('index',{//spa 定义视图 视图的名字 html将index.string加载到
  html:indexTpl

  //装载子视图
  // modules:[{
  //   name:'content',
  //   container:'#m-container',
  //   views:['home'],
  //   defaultTag:'home'
  // }]
})
