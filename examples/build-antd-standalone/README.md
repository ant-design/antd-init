# Build standalone antd

> 本例适用于 `antd@0.12`，`antd@1.0` 已提供单独的构建文件。

构建独立的 antd.js 和 antd.css。

----

```bash
$ npm install
$ npm run build
```

然后构建后的文件为 `dist/antd.js` 和 `dist/antd.css`。

这样你可以和 react 一样通过脚本引入的方式使用 `antd`。

---

注意：`webpack.config.js` 中移除了 `babel-plugin-antd` 和 `CommonPlugin` 以满足单独构建的需求。
