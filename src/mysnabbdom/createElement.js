export default  function createElement(vnode){
    let domNode=document.createElement(vnode.sel)
    //有子节点还是文本
    if(vnode.text!==''&&(!vnode.children||!vnode.children.length)){
        domNode.innerText=vnode.text;
        vnode.elm=domNode;  
    }else if(Array.isArray(vnode.children)&&vnode.children.length){
        // 内部是子节点、递归创建节点
        
    }
    return vnode.elm;
}