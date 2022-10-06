import vnode from './vnode'
/**
 * 1.h('div',{},'文字')
 * 2.h('div',{},[])
 * 3.h('div',{},h())
 * 
 */
export default  function(sel,data,c){
    if(arguments.length!==3){
        throw new Error('h必须传入3个参数')
    }
    if(typeof c==='string'||typeof c==='number'){
        return vnode(sel,data,undefined,c)
    }else if(Array.isArray(c)){
        let children=[];
        for(let i=0;i<c.length;i++){
            if(!(typeof c[i]==='object'&&c[i].hasOwnProperty('sel'))){
                throw new Error("传入的数组参数中有项不是h函数")
            }
            children.push(c[i])
        }
        return vnode(sel,data,children,undefined,undefined)

    }else if(typeof c==='object' && c.hasOwnProperty('sel')){
        return vnode(sel,data,[c],undefined,undefined)

    }else{
        throw new Error("传入的第三个参数不对")
    }
}