module.exports = {
  nav: [
    {
      text: "算法公式",
      link: "/leetcode/",
    },
  ],
  sidebar: {
    "/leetcode/": [
      {
        title: "算法公式",
        path: "/leetcode",
        collapsable: false,
        sidebarDepth: 2,
        children: ["/leetcode/二分搜索/二分", "/leetcode/双指针/双指针"],
      },
    ],
  },
};
