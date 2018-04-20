# {{ xlh前端Vue多页面架构  }}

> Vue.js project

## 开发

``` bash
# 在localhost:8080进行加载
npm run dev
```

[http://localhost:8080/index.html]

[http://localhost:8080/cell.html]

## 构建

``` bash
# 生产环境构建

npm run build // 打包

```

## Root Folder Structure

```bash
├── build  # 构建脚本目录
│   ├── build.js  # 生产环境构建脚本
│   ├── check-versions.js  #
│   ├── utils.js  # 构建相关工具方法
│   ├── vue-loader.conf.js  #
│   ├── webpack.base.conf.js #  wabpack基础配置
│   ├── webpack.dev.conf.js  # wabpack开发环境配置
│   ├── webpack.prod.conf.js # wabpack生产环境配置
│   └── webpack.test.conf.js #
├── config  # 项目配置
│   ├── dev.env.js  # 开发环境变量
│   ├── index.js  	# 项目配置文件
│   └── prod.env.js # 生产环境变量
├── src  # 主文件夹
│   ├── assets  # 公共资源
│   │   ├── images # 图片资源
│   │   │   └── logo.png
│   │   ├── util  # js资源
│   │   │   └── formatDate.js
│   │   └── styles # css资源
│   │   │   └── shopping.css
│   ├── components # 常用组件
│   │   └── modal.vue
│   └── pages  # 页面
│       ├── index # index.html (文件夹可以自定义)
│       │   ├── index.js   # 入口js(除更改webpack配置,否则不能定制文件名)
│       │   ├── index.vue  # index vue(文件名可以自定义)
│       │   └── index.html # 模板html(除更改webpack配置,否则不能定制文件名)
│       └── shopping # shopping.html
│       │   ├── index.js
│       │   ├── index.html
│       │   └── index.vue
├── LICENSE
├── .babelrc          # babel config（es2015默认）
├── .eslintrc.js      # eslint配置（eslint-config-vue默认）
├── package.json
├── postcss.config.js # postcss（autoprefixer默认）
├── webpack.config.js # webpack配置文件
└── README.md
```

## Dist文件夹结构

```bash
├── static
│   ├── css
│   │   │   ├── index.css
│   │   │   ├── shopping.css
│   ├── js
│   │   │   ├── index.js
│   │   │   ├── shopping.js
│   │   │   ├── manifest.js # 主要是一些异步加载的实现方法（通过建立script方式动态引入js）,因为是核心,所以要第一个进行加载,不然会报错
│   │   │   ├── vendors.js  #将所有从node_modules/里require(import)的依赖都打包到这里
│   └── img
│   │   └── icon_55.30b85eb.png
│   │── favicon.ico
│   ├── index.html
│   └── shopping.html
```

# {{ VueJs开发规范  }}

## 文件夹命名

``` bash
1.pages 下面的文件夹代表着模块的名字
2.由名词组成（index、shopping、car）
```

