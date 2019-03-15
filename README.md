# vue-cms

> Mr Wang

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1)安装 Mint UI
  # Vue 2.0
  cnpm install mint-ui -S
2)按需导入 Mint-UI
  1.安装 babel-plugin-component
    npm install babel-plugin-component -D
  2.修改.babelrc 文件
  3.引用所需组件
  

Vue2.x 如何引入scss
  1.引入loader
    cnpm install node-sass --save-dev
    cnpm install sass-loader --save-dev
    cnpm install style-loader --save-dev
    cnpm install sass-resources-loader --save-dev
  2.设置lang的类型
    <style lang="scss"></style>
    
.gitignore 忽略Git中不想提交的文件
