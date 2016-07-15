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


#### package.json

- 配置在 `package.json` 下的 `theme` 字段。（需要使用 antd-init）

#### webpack.config.js

- 自定义 webpack.config.js 文件

   ```js
   webpackConfig.babel.plugins.push(['antd', {
     style: true,
   }]);
   ```