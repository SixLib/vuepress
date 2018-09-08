module.exports = {
  base: "/vuepress/",
  title: "sixlib Note",
  description: "sixlib vuepress note",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "script",
      {
        type: "text/javascript",
        src: "http://tajs.qq.com/stats?sId=66001583",
        charset: "UTF-8"
      }
    ]
  ],
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 2,
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Vue",
        items: [
          { text: "Vuejs", link: "/vuejs/" },
          { text: "Vue-Router", link: "/vuerouter/" }
        ]
      },
      { text: "GitHub", link: "https://github.com/SixLib/vuepress" }
    ],
    sidebar: {
      "/vuejs/": [""],
      "/vuerouter/": [""]
    },
    lastUpdated: "上次修改时间"
  },
  markdown: {
    lineNumbers: true
  }
};
