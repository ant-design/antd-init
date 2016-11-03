# 修改 Ant Design 的样式变量

> 适用于 `antd@1+`。

所有样式变量可以在 https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less 里找到。

----

## 查看演示

```bash
$ npm install
$ npm start
```

然后访问 http://127.0.0.1:8989/。

## 颜色配置方式

有 `package.theme` 和 `less` 种方案，选择一种即可。

### 1) package.theme（推荐）

配置在 `package.json` 下的 `theme` 字段。theme 可以为配置为对象或文件路径。

```js
"theme": {
  "@primary-color": "#1088ae",
},
// 或
"theme": "./theme.js",
```

需要配合 atool-build 使用（antd-init 和 dva-cli 均支持）。如果你使用的是其他脚手架，可以参考 [atool-build 中 less-loader 的 webpack 相关配置 ](https://github.com/ant-tool/atool-build/blob/a4b3e3eec4ffc09b0e2352d7f9d279c4c28fdb99/src/getWebpackCommonConfig.js#L131-L138)，利用 `modifyVars` 配置覆盖原来的样式变量。

> 注意，样式必须加载 less 。保持 `babel-plugin-import` 的 style 属性配置为 `true` 或 `less`。

### 2) less

样式覆盖。不要引入 `antd/dist/antd.css`，而是改成以下的方式：

建立一个单独的 `less` 文件如下，再引入这个文件。

   ```css
   @import "~antd/dist/antd.less";
   @import "your-theme-file"; // 用于覆盖上面定义的变量
   ```

> 注意：这种方式的缺点会载入所有组件的样式，无法和按需加载插件 `babel-plugin-import` 的 `style` 属性一起使用。
