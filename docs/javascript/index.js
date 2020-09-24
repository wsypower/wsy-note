module.exports = {
  nav: [
    {
      text: "JavaScript基础",
      link: "/javascript/",
    },
  ],
  sidebar: {
    "/javascript/": [
      {
        title: "执行上下文",
        collapsable: false,
        sidebarDepth: 2,
        children: ["/javascript/执行上下文/执行上下文"],
      },
      // {
      //   title: "作用域链",
      //   collapsable: false,
      //   sidebarDepth: 2,
      //   children: ["/javascript/执行上下文"],
      // },
      // {
      //   title: "闭包",
      //   collapsable: false,
      //   sidebarDepth: 2,
      //   children: ["/javascript/执行上下文"],
      // },
      {
        title: "prototype",
        collapsable: false,
        sidebarDepth: 2,
        children: ["prototype"],
      },
    ],
  },
};
