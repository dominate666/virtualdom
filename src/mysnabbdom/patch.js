import vnode from './vnode';
import createElement from './createElement';
export default function patch(oldVnode,newVnode){
  //判断传入的第一个参数是dom节点还是虚拟节点
    if(!oldVnode.sel){
        oldVnode=vnode(oldVnode.tagName.toLowerCase(),{},[],undefined,oldVnode);
    }
    //判断oldVnode和newVnode是不是同一个节点
    if(oldVnode.key===newVnode.key&&oldVnode.sel===newVnode.sel){
        console.log('是同一个节点')
    }else{
        console.log('不是同一个节点,暴力插入新的，删除旧的')
       let newVnodeElm= createElement(newVnode)
       oldVnode.elm.parentNode.insertBefore(newVnodeElm,oldVnode.elm);
    }
}