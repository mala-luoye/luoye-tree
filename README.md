## luoye-tree

一个为文件目录输出树形结构的命令行工具。

## 全局安装

```cmd
npm install luoye-tree -g
```

## 使用

#### 查看所有命令: `ltree -h`

```txt
D:\技术特性测试\mala-luoye\luoye-tree>ltree -h
Usage: luoye-tree [options]

一个为文件目录输出树形结构的命令行工具

Options:
  -v, --version            输出当前版本
  -d,--directory <string>  指定目录路径，输出树形结构
  -l,--level <number>      限制目录层级，输出树形结构
  -i,--ignore <string>     指定需要忽略的文件夹/文件，输出树形结构
  -h, --help               display help for command
```

#### 指定当前目录 `+` 限定目录层级为2：`ltree -d . -l 2`

```txt
D:\技术特性测试\mala-luoye\luoye-tree>ltree -d . -l 2
luoye-tree
└── .git
    ├── COMMIT_EDITMSG
    ├── config
    ├── description
    ├── FETCH_HEAD
    ├── HEAD
    ├── hooks
    ├── index
    ├── info
    ├── logs
    ├── objects
    ├── ORIG_HEAD
    ├── packed-refs
    └── refs
└── .gitignore
└── .prettierrc.cjs
└── LICENSE
└── node_modules
    ├── .modules.yaml
    ├── .pnpm
    └── commander
└── package.json
└── pnpm-lock.yaml
└── README.md
└── src
    ├── actions
    ├── index.js
    └── utils
```

#### 忽略文件或文件夹 .git、node_modules、pnpm-lock.yaml：`ltree -d . -l 2 -i .git,node_modules,pnpm-lock.yaml`

```txt
D:\技术特性测试\mala-luoye\luoye-tree>ltree -d . -l 2 -i .git,node_modules,pnpm-lock.yaml
luoye-tree
└── .gitignore
└── .prettierrc.cjs
└── LICENSE
└── package.json
└── README.md
└── src
    ├── actions
    ├── index.js
    └── utils
```
