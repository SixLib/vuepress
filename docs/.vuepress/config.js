module.exports = {
  base: "/vuepress/",
  title: "sixlib Note",
  description: "sixlib vuepress note",
  head: [
    ["link", {
      rel: "icon",
      href: "/logo.png"
    }],
    ["mate", {
      name: "Keywords",
      Content: "javescript,vue,node"
    }],
    [
      "script",
      {
        type: "text/javascript",
        src: "https://tajs.qq.com/stats?sId=66001583",
        charset: "UTF-8"
      }
    ]
  ],
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 2,
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "EMCAScript",
        items: [{
          text: "es5",
          link: "/emcascript/es5/"
        }]
      },
      {
        text: "Vue",
        items: [{
          text: "Vuejs",
          link: "/vuejs/"
        },
        {
          text: "Vue-Router",
          link: "/vuerouter/"
        }
        ]
      },
      {
        text: "NodeJs",
        items: [{
          text: "Node面试笔记",
          link: "/nodejs/interview_notes"
        },
        {
          text: "koa笔记",
          link: "/nodejs/koa_note"
        }
        ]
      },
      {
        text: "GitHub",
        link: "https://github.com/SixLib/vuepress"
      }
    ],
    sidebar: {
      "/vuejs/": [""],
      "/vuerouter/": [""],
      "/emcascript/es5/": [
        {
          title: '入门',
          collapsable: true,
          children: [
            'basic/grammar'
          ]
        },
        {
          title: '数据类型',
          collapsable: true,
          children: [
            'types/',
            'types/null-undefined-boolean'
          ]
        },
      ],
      "/nodejs/interview_notes": ["interview_notes"],
      "/nodejs/koa_note": ["koa_note"]
    },
    lastUpdated: "上次修改时间"
  },
  markdown: {
    lineNumbers: true
  }
};