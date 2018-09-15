---
sidebar: false
---

# VuePress

## 全局安装

```sh
# 安装
cnpm i -g vuepress
# 新建一个 markdown 文件
echo "# Hello VuePress!" > README.md

# 启动项目
vuepress dev

# 构建静态文件
vuepress build
```

## 配置启动命令

在 `package.json`添加一个脚本：

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

::: tip 提示
如果没有`package.json`文件，**请手动创建**该文件（在项目根目录下）。

`docs`为存放文档的目录。
:::

---

想了解更多，请持续关注 [vuepress](https://vuepress.vuejs.org/zh/)
