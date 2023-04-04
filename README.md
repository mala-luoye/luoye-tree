## luoye-tree

一个为文件目录输出树形结构的命令行工具。

## 全局安装

```cmd
npm install luoye-tree -g
```

## 使用

#### 查看所有命令: `ltree -h`

```txt
C:\Users\liliang\Desktop\demo>ltree -h
Usage: luoye-tree [options]

一个为文件目录输出树形结构的命令行工具

Options:
  -v, --version            输出当前版本
  -d,--directory <string>  指定目录，输出树形结构
  -l,--level <number>      指定层级，输出树形结构
  -i,--ignore <string>     指定需要忽略的文件夹/文件，输出树形结构
  -h, --help               display help for command
```

#### 使用命令：`ltree -d . -l 1`

```txt
C:\Users\liliang\Desktop\demo>ltree -d . -l 1
demo
└── docs-demo
└── kunlun-design-icons
└── luoye-tools
└── mala-ui
└── tally-book
└── test-cli
```

#### 使用命令：`ltree -d . -l 1 -i test-cli`

```txt
C:\Users\liliang\Desktop\demo>ltree -d . -l 1 -i test-cli
demo
└── docs-demo
└── kunlun-design-icons
└── luoye-tools
└── mala-ui
└── tally-book
```


