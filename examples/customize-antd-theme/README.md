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

有 `package.theme` 和 `less` 种方方案，选择一种即可。

### 1) package.theme（推荐）

配置在 `package.json` 下的 `theme` 字段。theme 可以为配置为文件路径: https://github.com/ant-tool/atool-build/issues/176 。

需要配合 antd-init 使用。

### 2) less

样式覆盖。不要直接引入 `antd/dist/antd.css` 或 `antd/dist/antd.less`，而是改成以下的方式：

建立一个单独的 `less` 文件如下，再引入这个文件。

   ```css
   @import "~antd/lib/style/themes/default.less";
   @import "your-theme-file"; // 用于覆盖上面定义的变量
   @import "~antd/lib/style/core/index.less";
   @import "~antd/lib/style/components.less";
   ```

注意：这种方式会载入所有组件的样式，无法和 babel-plugin-antd 的 style 属性一起使用。
