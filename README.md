# webpack2 demo


## 思考

+ 打包之后生成的js文件很大

> 解决方法：提取公共代码（CommonsChunkPlugin插件）、压缩代码（webpack.optimize.UglifyJsPlugin插件）we

+ 打包之后生成js路径问题

+ 只是打包静态资源，html不打包

+ 打包后seo的问题

+ 对比browserify的热替换功能