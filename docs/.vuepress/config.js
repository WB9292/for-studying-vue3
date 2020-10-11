module.exports = {
  title: "Vue3源码解析",
  description: "vue3，vue3源码解析，vue3代码分析",
  themeConfig: {
    smoothScroll: true,
    lastUpdated: '上一次更新时间',
    nav: [
      { text: "源码解析", link: "/read/" },
      { text: "支持", link: "/support/" },
      { text: "源码", link: "https://github.com/WB9292/vue-next" },
    ],
    sidebar: {
      "/read/": [
        {
          title: "基础", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          children: ["", "command"],
        },
        {
          title: "API功能解析", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          children: ["application-config"],
        },
      ],
    },
  },
};
