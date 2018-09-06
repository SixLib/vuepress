module.exports = {
  title: "sixlib Note",
  description: "sixlib vuepress note",
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 2,
    nav: [
      { text: "Home", link: "/" },
      { text: "Vuejs", link: "/vuejs/" },
      { text: "GitHub", link: "https://github.com/SixLib/vuepress" }
    ],
    sidebar: {
      "/vuejs/": ["", "router/"]
    },
    lastUpdated: "上次修改时间"
  },
  markdown: {
    lineNumbers: true
  }
};
