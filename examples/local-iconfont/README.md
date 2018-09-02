**⚠️⚠️⚠️ antd@3.9.0+ 之后图标采用 svg 实现，不再从远程加载字体图标，本文仅针对之前的版本有效。**

---

# 本地部署 Iconfont

Ant Design 默认的 iconfont 文件托管在 [iconfont.cn](http://iconfont.cn/) 并默认使用平台提供的 alicdn 地址，公网可访问使用。

由于 alicdn 对部分域名有[访问限制](https://github.com/ant-design/ant-design/issues/1070)，或者需要内网环境使用，您可以参照这个例子将 iconfont 文件部署到本地。

## 演示

```bash
$ npm install
$ npm start
```

然后访问 http://127.0.0.1:8989/。

最新的 iconfont 文件可以到 [此链接](https://ant.design/docs/spec/download-cn) 下载。

> 如果使用 `package.theme` 来自定义 iconfont 的路径无效，可以参考[这个解决方案](https://github.com/visvadw/dvajs-user-dashboard/pull/2)。

---

# Local hosted Iconfont

**⚠️⚠️⚠️ We implement Icons by svg After antd@3.9.0+ instead font icon.**

Follow this repo to host iconfont in your local environment.

Iconfont files is hosted at [iconfont.cn](http://iconfont.cn/) defaultly, you can use it for free.

Due to [some domain restriction issues](https://github.com/ant-design/ant-design/issues/1070), or for network speed.
You can follow this repo to host iconfont files in your local development environment.

## Demo

```bash
$ npm install
$ npm start
```

Then visit http://127.0.0.1:8989/ .

Latest Iconfont files of Ant Design can be downloaded here: https://ant.design/docs/spec/download

> If it is not working when you use `package.theme` way to customize iconfont path, you could check [this solution](https://github.com/visvadw/dvajs-user-dashboard/pull/2).
