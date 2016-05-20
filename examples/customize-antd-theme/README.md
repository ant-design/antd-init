# 修改 Ant Design 的主色系

> 适用于 `antd@1.x`。

----

## 查看演示

```bash
$ npm install
$ npm start
```

然后访问 http://127.0.0.1:8989/。

## 颜色配置方式

有三种方式，选择一种即可。

> 注意一定要引入 `antd/dist/antd.less` 文件，而不是 `antd/dist/antd.css` 文件。

#### package.json

- 配置在 `package.json` 下的 `theme` 字段。（需要使用 antd-init）

#### webpack.config.js

- 自定义 webpack.config.js 文件，将 lessloader 配置如下：

   ```js
    var ExtractTextPlugin = require("extract-text-webpack-plugin");
    module.exports = function(webpackConfig) {
     webpackConfig.module.loaders.forEach(function(loader) {
       if (loader.loader === 'babel') {
         // https://github.com/ant-design/babel-plugin-antd
         loader.query.plugins.push('antd');
       }
       if (loader.test.toString() === '/\\.less$/') {
         loader.loader = ExtractTextPlugin.extract(
           'css?sourceMap!' +
           'autoprefixer-loader!' +
           `less?{"sourceMap":true,"modifyVars":{"primary-color":"#1DA57A"}`
         );
       }
       return loader;
     });

     return webpackConfig;
   };
   ```

#### less

- 样式覆盖。不要直接引入 `antd/dist/antd.less`，而是改成以下的方式：

  建立一个单独的 `less` 文件如下，再引入这个文件。

   ```css
   @import "~antd/lib/style/themes/default.less";
   @import "your-theme-file"; // 用于覆盖上面定义的变量
   @import "~antd/lib/style/core/index.less";
   @import "~antd/lib/style/components.less";
   ```
