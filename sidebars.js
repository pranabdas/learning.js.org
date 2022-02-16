module.exports = {
  docs: [
    "index",
    {
      type: "category",
      label: "Basics",
      collapsed: true,
      items: [
        "basics/setup",
        "basics/variables",
        "basics/conditional-statement",
        "basics/arrays",
        "basics/loop",
      ],
    },
    {
      type: "category",
      label: "Functions and Objects",
      collapsed: true,
      items: [
        "functions-objects/functions",
        "functions-objects/variable-scope",
        "functions-objects/objects",
        "functions-objects/map",
      ],
    },
    {
      type: "category",
      label: "DOM",
      collapsed: true,
      items: [
        "dom/dom",
        "dom/event-handler",
      ],
    },
    {
      type: "category",
      label: "Node",
      collapsed: true,
      items: [
        "node/node",
        "node/io",
        "node/core-modules",
        "node/file-system",
        "node/callbacks",
        "node/module-exports",
      ],
    },
    {
      type: "category",
      label: "Electron",
      collapsed: true,
      items: [
        "electron/electron",
      ],
    },
    {
      type: "category",
      label: "React",
      collapsed: true,
      items: [
        "react/react",
        "react/gh-pages",
      ],
    },
    {
      type: "category",
      label: "Miscellaneous",
      collapsed: true,
      items: [
        "misc/node-uninstall",
        "misc/npm-update",
        "misc/cspell",
      ],
    },
    "resources",
    "license",
  ],
};
