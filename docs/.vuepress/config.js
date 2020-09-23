module.exports = {
  base: "/w-note/",
  title: "个人文档笔记",
  description: "Just playing around",
  themeConfig: {
    logo: "/assets/img/logo.png",
    // displayAllHeaders: true, // 默认值：false
    // sidebar: auto,
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Languages",
        items: [
          {
            text: "Group1",
            items: [
              { text: "Japanese", link: "/language/japanese/" },
              { text: "Japanese", link: "/language/japanese/" },
              { text: "Japanese", link: "/language/japanese/" },
            ],
          },
          {
            text: "Group2",
            items: [
              { text: "Japanese", link: "/language/japanese/" },
              { text: "Japanese", link: "/language/japanese/" },
              { text: "Japanese", link: "/language/japanese/" },
            ],
          },
        ],
      },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" },
    ],
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
  ],
};
