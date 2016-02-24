# 修改 Ant Design 的主色系

----

## 查看演示

```bash
$ npm install
$ npm run dev
```

然后访问 http://127.0.0.1:8989/。

## 颜色配置方式

有三种方式，选择一种即可。

> 注意一定要引入 `antd/style/index.less` 文件，而不是默认的 `antd/lib/index.css` 文件。

- 配置在 `package.json` 下的 `theme` 字段。

- 自定义的 webpack.config.js 文件，将 lessloader 配置如下：

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

- 样式覆盖。不要直接引入 `antd/style/index.less`，而是改成一下的方式：

   ```css
   @import "antd/style/themes/default/index.less";
   @import "your-theme-file";    // 用于覆盖上面定义的变量
   @import "antd/style/core/index.less";
   ```
