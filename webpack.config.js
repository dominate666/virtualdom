const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    mode:"development",
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js",
        publicPath:'/xuni/'  //访问localhost:8080/xuni/bundle.js
    },
    devtool:'inline-source-map',
    plugins:[
        new htmlWebpackPlugin({
            filename:"test.html",
            template:'www/index.html'
        })
    ],
    devServer:{
        port:8080,
        open:true,
        //静态资源文件夹
        static:{
            directory:'www'
        }
    }
}