# 基于vue-cli整理的基础工程

## Project setup
```
npm install
yarn install
```
### Compiles and hot-reloads for development
```
npm run serve
yarn serve
```
### Compiles and minifies for production
```
npm run build
yarn build
```
### 改动的地方
1，添加了api、style、util目录，vue.config.js文件。


    api->base.js  用来管理域名，考虑到会有请求多个域名的情况。不需要可以删除，自行设置baseUrl
    style->common->base.js  用来管理全局变量
    style->common->reset.scss  重置样式
    utils->http.js  封装的axios
    utils->tools.js  一个工具类


2，修改了store文件index.js，改为模块化管理state

3，在main.js添加了Vue.prototype.$api = api;在调用api的时候可以使用result风格this.$api.className.function

### 建议的一些书写规范
.vue后缀的文件 用大驼峰命名，首字母大写

.js、.scss后缀的文件 用小驼峰命名，首字母小写

vue的书写规范尽量遵循官方的规范，https://cn.vuejs.org/v2/style-guide/index.html

书写样式，尽量选择类选择器，少用元素选择器。在 scoped 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
