module.exports = {
  // 网站的一些基本配置
  // base:配置部署站点的基础路径，后续再介绍
  title: "AndMeBlockDocs", // 网站的标题
  description: "我的个人学习笔记", // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  head: [
    ["link", { rel: "icon", href: "/logo.png" }], // 需要被注入到当前页面的 HTML <head> 中的标签
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    nav: [
      // { text: '技术框架', link: '/algorithm/' }, // 内部链接 以docs为根目录
      { text: "不懂就点这", link: "http://www.baidu.com/" }, // 外部链接
      { text: "Vue", link: "https://cn.vuejs.org/" },
      {
        text: "经典三剑客",
        items: [
          {
            text: "JS合集",
            link: "/JavaScript/01Javascript基础",
          },
          {
            text: "CSS合集",
            link: "/CSSDoc/01css属性",
          },
          {
            text: "HTML合集",
            link: "/HTMLDoc/01基础标签",
          },
        ],
      },
      {
        text: "框架经验",
        items: [
          {
            text: "Vue",
            link: "/Vue/",
          },
        ],
      },
      // 下拉列表
      {
        text: "GitHub",
        items: [
          {
            text: "GitHub地址",
            link: "https://github.com/AndMe0818?tab=repositories",
          },
        ],
      },
    ],
    // sidebar: [
    //   {
    //     title: "Group 1", // 必要的
    //     path: "/fontend/test1/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     // sidebarDepth: 1, // 可选的, 默认值是 1
    //     children: [
    //       { title: "test111", path: "/fontend/test1" },
    //       { title: "test222", path: "/fontend/test2" },
    //     ],
    //   },
    // {
    //   title: "Vue", // 必要的
    //   path: "/Vue/01浅入Vue2x", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //   collapsable: false, // 可选的, 默认值是 true,
    //   // sidebarDepth: 1, // 可选的, 默认值是 1
    //   children: [
    //     { title: "浅入Vue2x", path: "/Vue/01浅入Vue2x" },
    //     { title: "Vue2x全家桶", path: "/Vue/02Vue的全家桶" },
    //   ],
    // },
    //   {
    //     title: "JavaScript", // 必要的
    //     path: "/JavaScript/01Javascript基础", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     // sidebarDepth: 1, // 可选的, 默认值是 1
    //     children: [
    //       { title: "Javascript基础", path: "/JavaScript/01Javascript基础" },
    //       { title: "ES6语法", path: "/JavaScript/02JavascriptES6 语法" },
    //       { title: "JS八股文", path: "/JavaScript/03JavaScript八股文" },
    //       { title: "常见面试题", path: "/JavaScript/04Js常见面试题" },
    //     ],
    //   },
    // ],
    sidebar: {
      "/fontend/": [
        {
          title: "Group 1", // 必要的
          // path: "/fontend/test1/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          // sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            { title: "test111", path: "/fontend/test1" },
            { title: "test222", path: "/fontend/test2" },
          ],
        },
      ],
      "/Vue/": [
        {
          title: "Vue", // 必要的
          // path: "/Vue/01浅入Vue2x/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          // sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            { title: "浅入Vue2x", path: "/Vue/01浅入Vue2x" },
            { title: "Vue2x全家桶", path: "/Vue/02Vue的全家桶" },
          ],
        },
      ],
      "/JavaScript/": [
        {
          title: "JavaScript", // 必要的
          // path: "/JavaScript/01Javascript基础", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          // sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            { title: "Javascript基础", path: "/JavaScript/01Javascript基础" },
            { title: "ES6语法", path: "/JavaScript/02JavascriptES6 语法" },
            { title: "JS八股文", path: "/JavaScript/03JavaScript八股文" },
            { title: "常见面试题", path: "/JavaScript/04Js常见面试题" },
          ],
        },
      ],
      "/CSSDoc/": [
        {
          title: "CSS", // 必要的
          // path: "/CSSDoc/01css属性", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          // sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            { title: "css属性", path: "/CSSDoc/01css属性" },
            { title: "02案例和方案", path: "/CSSDoc/02案例和方案" },
            // { title: "JS八股文", path: "/JavaScript/03JavaScript八股文" },
            // { title: "常见面试题", path: "/JavaScript/04Js常见面试题" },
          ],
        },
      ],
      "/HTMLDoc/": [
        {
          title: "HTML", // 必要的
          // path: "/HTMLDoc/01基础标签", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          // sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            { title: "基础标签", path: "/HTMLDoc/01基础标签" },
            { title: "案例和方案", path: "/HTMLDoc/02案例和方案" },
            // { title: "JS八股文", path: "/JavaScript/03JavaScript八股文" },
            // { title: "常见面试题", path: "/JavaScript/04Js常见面试题" },
          ],
        },
      ],
    },
  },
};
