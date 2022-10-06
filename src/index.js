import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

let myVnode2=h('ul',{},[
    h('li',{},'A'),
    h('li',{},'B'),
    h('li',{},'C'),
    h('li',{},'D')
])
let myVnode1=h('ul',{},'hello');
const container=document.getElementById("container")
patch(container,myVnode1)