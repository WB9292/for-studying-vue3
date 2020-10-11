const isDev = process.env.NODE_ENV === 'development'
let head = []

if(!isDev) {
  // 友盟的数据统计
  head = [['script', {}, `
    document.write(unescape("%3Cspan id='cnzz_stat_icon_1279339182'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1279339182%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));
  `]]
}

module.exports = {
  title: "Vue3源码解析",
  description: "vue3，vue3源码解析，vue3代码分析",
  head,
  themeConfig: {
    smoothScroll: true,
    lastUpdated: '上一次更新时间',
    nav: [
      { text: "源码解析", link: "/read/" },
      { text: "赞助", link: "/support/" },
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
