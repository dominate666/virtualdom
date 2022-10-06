    import h from './mysnabbdom/h'
let myNode1=h('div',{},[
    h('p',{},'哈哈'),
    h('p',{},'嘻嘻'),
    h('div',{},[
        h('p',{},'123')
    ]),
    h('div',{},h('p',{},'666'))
])
console.log('myNode1',myNode1)