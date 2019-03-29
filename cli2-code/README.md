# my-app

> my first vue app

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run d wyd

# build for production with minification
npm run b wyd

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
框架说明：
1.UI框架
  饿了么UI框架 官网教程地址：
  http://element-cn.eleme.io/#/zh-CN/component/installation
2.接口数据调用
  import {API} from 'src/api/api' # 不同文件引入地址不同
  调用方法
  # post请求 API.getAllDemand为具体的接口地址 先去api.js里去添加后调用，所有的接口地址全部写在app.js中  data为传入的参数
  API.post(API.getAllDemand,data).then()
  # get请求 注意所有异常错误已经在app.js中做了处理
  API.get(API.getAllDemand,data).then()
  #如需对接口的异常错误做特殊处理可调用 API.post0()或API.get0()
3.移动端自适应问题
  采用了UI库内的flex布局具体看UI库教程
  像素大小用了rem转换 可以根据设计稿自行去设置按设计稿标注的像素大小去写就可以了
4.路由
  采用了vue router 每次新增一个页面需先进入src/router/index文件中routes下增加以下内容
  routes: [
    {
      path: '/',   //路径
      name: 'HelloWorld', //页面名
      component: HelloWorld  //组件名
      meta: {keepAlive: false} // 是否需要缓存组件
    }
  ]
5.css样式问题
  已经导入sass,可在style中设置lang='scss'来使用 默认使用css
6.状态管理
  已导入vuex，使用方法可见教程：https://cn.vuejs.org/v2/guide/state-management.html
  建议：当项目为小型项目可不用vuex
7.文件说明
  api 接口相关
  assets 可存放封装好的js css img
  components 组件目录 每个活动项目建一个总文件夹  每个功能页面的组件需在其子文件夹下 公共组件可存放在common文件夹下
  static 可存放导入的第三方js插件如jquery
8.目录结构
├── README.md
├── build                     # build 脚本
├── config                    # prod/dev build config 文件
├── hera                      # 代码发布上线
├── index.html                # 最基础的网页
├── package.json
├── src                       # Vue.js 核心业务
│   ├── commom                # 通用类
│   ├── components            # 公共组件
│   ├── controller            # 业务相关(卡车金融、红包...)
│   │   ├── truckFinance...
│   │   │   ├── api           # 接入后端服务的基础 API
│   │   │   ├── assets        # 资源文件，图片、字体...
│   │   │   ├── common        # 业务相关通用文件
│   │   │   ├── page          #页面
│   │   │   ├── router        #子路由
│   │   │   ├── store         #子状态管理
│   ├── plugin                # 插件(分享、授权登录...)
│   ├── router                # 根路由
│   ├── store                 # Vuex 根状态管理
│   ├── main.js               # Vue 入口文件
│   ├── style                 # 通用样式
│   ├── utils                 # 工具类
│   ├── App.vue               # App Root Component
├── static                    # DevServer 静态文件
└── test                      # 测试
