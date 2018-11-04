# 修改 Ant Design 的样式变量

本文内容可能过时，优先阅读官网文档：https://ant.design/docs/react/customize-theme-cn

---

> 适用于 `antd@>=1.0.0`/`antd-mobile@>=0.9.0`。

所有样式变量可以在
[antd](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less) /
[antd-mobile](https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less)
里找到。

----

## 查看演示

```bash
$ npm install
$ npm start
```

然后访问 http://127.0.0.1:8989/。

## 颜色配置方式

有两种方案，选择一种即可。

### 方案一（推荐）

配置在 `package.json` 下的 `theme` 字段。theme 可以为配置为对象或文件路径。

```js
"theme": {
  "primary-color": "#1088ae",
},
// 或
"theme": "./theme.js",
```

需要配合 atool-build 使用（antd-init 和 dva-cli 均支持）。如果你使用的是其他脚手架，可以参考 [atool-build 中 less-loader 的 webpack 相关配置 ](https://github.com/ant-tool/atool-build/blob/a4b3e3eec4ffc09b0e2352d7f9d279c4c28fdb99/src/getWebpackCommonConfig.js#L131-L138)，利用 `modifyVars` 配置覆盖原来的样式变量。

> 注意，样式必须加载 less 。保持 `babel-plugin-import` 的 style 属性配置为 `true`。

#### lessToJs

想直接使用正常的 theme.less 文件，可以自己通过类似 [less-vars-to-js](https://www.npmjs.com/package/less-vars-to-js)
的工具读取 less 文件变量，再自己设置 `modifyVars` 即可，示例如下：

```js
const lessToJs = require('less-vars-to-js');

const themer = lessToJs(fs.readFileSync(path.join(__dirname, './alipay-theme/theme.less'), 'utf8'));
webpackConfig.module.loaders.forEach(function(loader) {
  if (loader.test.toString() === '/\\.less$/') {
    loader.loader =
      loader.loader.replace('"modifyVars":{}', '"modifyVars":' + JSON.stringify(themer));
  }
});
```

### 方案二

建立一个单独的 `less` 文件如下，再引入这个文件。

```css
@import "~antd/dist/antd.less";
@import "your-theme-file"; // 用于覆盖上面定义的变量
```

> 注意：这种方式的缺点会载入所有组件的样式，无法和按需加载插件 `babel-plugin-import` 的 `style` 属性一起使用。
