const JavaScript = require("../javascript/index.js");
module.exports = {
  base: "/w-note/",
  title: "文档笔记",
  description: "Just playing around",
  themeConfig: {
    logo: "/assets/img/logo.png",
    nav: [
      ...JavaScript.nav,
      {
        text: "Vue",
        items: [
          { text: "vue", link: "/vue-zoology/vue/JSX" },
          { text: "vuex", link: "/vue-zoology/vuex/vuex" },
          { text: "vue-router", link: "/vue-zoology/vue-router/vue-router" },
          { text: "vue-cli", link: "/vue-zoology/vue-cli/cli" },
        ],
      },
      { text: "Guide", link: "/guide/" },
    ],
    sidebar: {
      ...JavaScript.sidebar,
      "/vue-zoology/vue/": [
        {
          title: "vue", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["JSX"],
        },
        {
          title: "vue源码", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["JSX"],
        },
      ],
      "/vue-zoology/vuex/": [
        {
          title: "vuex", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["vuex"],
        },
        {
          title: "vuex源码", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["vuex"],
        },
      ],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@img": "/img/",
      },
    },
  },
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/medium-zoom",
    "@vuepress/nprogress",
    "@vuepress/active-header-links",
    "@vuepress/register-components",
    {
      componentsDir: "./common",
    },
  ],
  extraWatchFiles: ["docs/javascript/index.js"],
};
