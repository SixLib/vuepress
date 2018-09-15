# Node.JS

## 面试笔记

### 为什么使用 NodeJs,他有哪些缺点？

:::tip 优点

- [事件驱动](https://www.cnblogs.com/findumars/p/6361627.html)，通过闭包很容易实现客户端的生命活期。
- 不用担心多线程、锁、并行计算的问题
- V8 引擎速度非常快
- 对于游戏来说，写一套游戏-逻辑代码，前后端通用

:::

:::warning 缺点

- nodejs 更新很快,可能会出现版本兼容

- nodejs 还不算成熟，还没有大制作

- nodejs 不想其他的服务器，对于不同链接，不支持进程和线程操作

:::

### 什么是错误优先的回调函数？

错误优先（Error-First）的回调函数（Error-First CallBack）用于同时返回错误和数据。第一个参数返回错误，并且验证它是否出错；其他参数返回数据。

```js
fs.readFile(filePath, function(err, data) {
  if (err) {
    //handle the error
  }
  // use the data object
});
```

### 如何避免回调地狱？

- 模块化：将回调函数转换为独立的函数

- 使用流程控制库(如：[`async`](https://caolan.github.io/async/))

- 使用`Promise`

- 使用 `async/await`

### 什么是 Promise？

[Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)可以更好的帮助我们处理异步操作。多个 Promise 可以链接起来。

```js
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("result");
  }, 100);
})
  .then(console.log)
  .catch(console.error);
```

### 用什么工具保证一直的代码风格？为什么要这样？

:::tip
团队协作时，保证一致的代码风格是非常重要的，这样团队成员才能更快的修改代码，而不需要每次去适应新的风格。
:::

- [eslint](https://eslint.org/)

- [Standard](https://standardjs.com/)

- jslint

### 什么是`stub`？举例说明

`stub`用于模拟组件、模块行为。测试时，`stub`可以为函数调用返回模拟的结果。比如说，我们写文件时，实际上并不需要真正的去写。

```js
var fs = require("fs");
var writeFileStub = sinon.stub(fs, "writeFile", function(path, data, cb) {
  return cb(null);
});

expect(writeFileStub).to.be.called;

writeFileStub.restore();
```

### 什么是测试金字塔？举例说明

:::tip
测试金字塔反映了需要写的单元测试、集成测试、端到端测试的比例。
:::

<img :src="$withBase('/images/1201653-20171127104813253-720616924.png')" />

测试 http 接口应该是这样的：

- 很多单元测试，分别测试各个模块（依赖需要 stub）

- 较少的集成测试，是各个模块之间的交互（依赖不能 stub）

- 少量端到端的测试，去调用真正的接口（依赖不能 stub）

### 如何用 NODE 监听 80 端口？

::: warning
在类 Unix 系统中你不应该去监听 80 端口，因为这需要超级用户权限。因此不推荐让你的应用直接监听 80 端口。
目前，如果一定要让你的应用箭筒 80 端口，你可以通过在 Node 应用前方在添加一层反向代理（例如 nginx）来实现。否则建议监听大于 1024 端口。
:::

<img :src="$withBase('/images/1201653-20171127113957737-1743742030.png')" />

:::tip
方向代理是指以代理服务器来接受 Internet 上的网络请求，然后将请求转发给内部网络上的服务器，并且将服务器的返回结果发给客户端。
:::

### 什么是事件循环

- Node 采用单线程的处理机制（所有的 I/O 请求都采用非阻塞工作方式）。而底层借助 Libuv 来作为抽象封装层，从而屏蔽不同操作系统的差异。Node 可以借助 Libuv 来实现线程。

<img :src="$withBase('/images/1201653-20171127114014956-1412280481.png')" alt="Node与Libuv的关系" />

- Libuv 库负责 Node Api 的执行。它将不同的任务分配给不同的线程，形成一个事件循环，以异步的方式将任务的行结果返回给 V8 引擎。

<img :src="$withBase('/images/1201653-20171127114035472-900672231.png')" alt="Node与Libuv的关系" />

- 每一个 I/O 都需要一个回调函数 ———— 一旦执行完便堆到事件循环上用于执行

### 运算错误与程序员错误

::: tip
运算错误并不是 bug,这是和系统相关的问题，例如请求超时或硬件故障。而程序员错误就是所谓的 bug
:::

### 使用 npm 有哪些好处？

:::tip
通过 npm，你可以安装和管理项目的依赖，并能指明依赖项的具体版本号。对于 Node Coder 而言，你可以通过`package.json`文件来管理项目信息，配置脚本，以及指明依赖的具体版本。
:::
