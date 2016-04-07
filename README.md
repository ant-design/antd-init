# antd-init

[![NPM version](https://img.shields.io/npm/v/antd-init.svg?style=flat)](https://npmjs.org/package/antd-init)

[Ant Design](https://github.com/ant-design/ant-design) boilerplate generator.

----

## Feature

- Generate a webpack workflow based boilerplate.
- support ES2015 and less.
- Local development via [dora](https://github.com/dora-js/dora), support proxy, HMR and unit test.
- support custom webpack.config，[examples](./boilerplate/webpack.config.js).

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
```

Start development server.

```bash
$ npm start
```

Build.

```bash
$ npm run build
```
