module.exports = {
  nav: [
    {
      text: "数据类型看算法",
      link: "/算法/",
    },
  ],
  sidebar: {
    "/算法/": [
      {
        title: "数组和字符串",
        path: "/算法/",
        collapsable: false,
        sidebarDepth: 2,
        children: ["/算法/数组和字符串/数组", "/算法/数组和字符串/字符串"],
      },
    ],
  },
};
