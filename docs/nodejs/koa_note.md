# koa 笔记

## koa-router 实现路由可配置化

[`koa-router`](https://npm.taobao.org/package/koa-router)提供了[`koa`](https://npm.taobao.org/package/koa)框架的路由模块。在实际过程中你会发现，路由维护起来不是很方便。由此，产生了一个想法，是否**可以通过配置的方式实现路由的动态配置？**

以下为示例代码：

- main.js 示例代码

```js
const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");

const router = new Router();

//引入路由配置文件
const routerConf = require("./router-conf.json");

/**
 * 遍历路由配置文件动态添加路由
 * controller 为路由callback的根路径
 */
routerConf.forEach(e => {
  switch (e.type) {
    case "get&post":
      router.get(e.path, require(`../controller/${e.router}`));
      router.post(e.path, require(`../controller/${e.router}`));
      break;
    case "post":
      router.post(e.path, require(`../controller/${e.router}`));
      break;
    case "put":
      router.put(e.path, require(`../controller/${e.router}`));
      break;
    case "del":
      router.del(e.path, require(`../controller/${e.router}`));
      break;
    default:
      router.get(e.path, require(`../controller/${e.router}`));
      break;
  }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
```

- router-conf.json 示例

```json
[
  {
    "type": "get&post",
    "path": "/",
    "router": "index"
  },
  {
    "path": "/home",
    "router": "home"
  },
  {
    "type": "post",
    "path": "/login",
    "router": "login"
  }
]
```
