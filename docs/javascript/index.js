module.exports = {
  nav: [
    {
      text: "JavaScript",
      link: "/javascript/prototype",
    },
  ],
  sidebar: {
    "/javascript/": [
      {
        title: "执行上下文",
        collapsable: false,
        sidebarDepth: 2,
        children: ["执行上下文"],
      },
      {
        title: "prototype",
        collapsable: false,
        sidebarDepth: 2,
        children: ["prototype"],
      },
    ],
  },
};
