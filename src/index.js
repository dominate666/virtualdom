import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
  } from "snabbdom";
  
  // 创建出patch函数
  let patch=init([classModule,propsModule,styleModule,eventListenersModule]);
  // 创建虚拟节点
  let myVnode1=h('a',{props:{href:'http://www.atguigu.com',target:"_blank"}},'尚硅谷')
  
  let myVnode2=h('div',{class:{'box':true}},'我是一个盒子');

  let myVnode3=h('ul',[
    h('li','苹果'),
    h('li','香蕉'),
    h('li','橘子')
  ]);
  // 让虚拟节点上树
  let container=document.getElementById("container")
//   patch(container,myVnode1)
//   patch(container,myVnode2)
  patch(container,myVnode3)
