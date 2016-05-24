# antd-init

[![NPM version](https://img.shields.io/npm/v/antd-init.svg?style=flat)](https://npmjs.org/package/antd-init)

[Ant Design](https://github.com/ant-design/ant-design) boilerplate generator.

----

## Feature

- Generate a webpack workflow based boilerplate.
- support ES2015 and less.
- Local development via [dora](https://github.com/dora-js/dora), support proxy, HMR and unit test.
- support custom webpack.config，[examples](./boilerplate/redux/webpack.config.js).

More usage: http://ant-tool.github.io/

## Install

```bash
$ npm i antd-init -g
```

## Usage

Generate boilerplate.

```bash
$ mkdir foo && cd foo
$ antd-init

// or with specify type
$ antd-init --type plain-react
$ antd-init --type redux
```

Start development server.

```bash
$ npm start
```

Build.

```bash
$ npm run build
```

Test.

```bash
$ npm test
```

Lint.

```bash
$ npm run lint
```

## Don't work in IE8 ?

Since IE8 is don't supported in main react community, you should do follow steps to make it work: 

1. Open `package.json`

Modify dependency version.

```diff
- "react": "^15.0.2",
- "react-dom": "^15.0.2",
- "react-router": "^2.0.1",
+ "react": "0.14.x",
+ "react-dom": "0.14.x",
+ "react-router": "2.3.x"
```

Remove hmr plugin.

```diff
- "start": "dora -p 8001 --plugins \"webpack,hmr,proxy,livereload?enableJs=false&injectHost=127.0.0.1,browser-history?index=/src/entries/index.html\"",
+ "start": "dora -p 8001 --plugins \"webpack,proxy,livereload?enableJs=false&injectHost=127.0.0.1,browser-history?index=/src/entries/index.html\"",
```

2. Open `webpack.config.js`, and enable es3ify-loader

```diff
// Enable this if you have to support IE8.
- // webpackConfig.module.loaders.unshift({
- //   test: /\.jsx?$/,
- //   loader: 'es3ify-loader',
- // });
+ webpackConfig.module.loaders.unshift({
+   test: /\.jsx?$/,
+   loader: 'es3ify-loader',
+ });
```

