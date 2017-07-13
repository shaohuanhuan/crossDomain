#b2b-pc-4.0
dev
```javascript
npm install
npm install supervisor -g
gulp dev
npm run dev
```
build
```
gulp build
npm start
```
#启动
localhost://8080


#项目结构

```
.
|-- restful                            // 后端nodejs目录
    |-- bin                            // nodejs 服务目录
        |-- www.js                     // 启动服务的文件
    |-- common                         // 公共文件目录
    |-- routes                         // 路由文件
    |-- app.js                         // 入口文件，express中间件
|-- static                             // 静态资源文件，发布目录
    |-- images                         // 图片文件
    |-- theme1                         // 主题1打包文件
    ...
|-- webApp                             // 前端目录
    |-- common                         // 所有主题公共目录
        |-- components                 // 一些公共的组件
        |-- js                         // 公共的js（包括各个页面的API）
        |-- style                      // 公共的样式文件
    |-- views                          // 主题公共的页面
    |-- theme1                         // 主题1目录
        |-- js                         // 主题1 所有的js文件
            |-- home                   // 首页文件夹
                |-- index.js           // 首页主js文件
            ...
        |-- style
            |-- common                 // 主题1的所有公共样式
            ...                        // 主题模块的其他样式
        |-- views
            |-- components             // 主题1的公共组件部分
            ...                        // 主题1其他模块页面
    ...        
        
    
```