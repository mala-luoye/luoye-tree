#!/usr/bin/env node
const { program } = require("commander")
const { version } = require("../package.json")
const handleAction = require("./actions")

program
  .name("luoye-tree")
  .description("一个为文件目录输出树形结构的命令行工具")
  .version(version, "-v, --version", "输出当前版本")
  .option("-d,--directory <string>", "指定目录，输出树形结构")
  .option("-l,--level <number>", "指定层级，输出树形结构")
  .option("-i,--ignore <string>", "指定需要忽略的文件夹/文件，输出树形结构")
  .parse(process.argv)

handleAction(program.opts())
