const fs = require("node:fs")
const path = require("node:path")
const { arrayDiff } = require("../utils")

const createTree = (targetPath, level, ignore_array) => {
  const curBase = path.basename(targetPath)
  // 判断当前目录是文件夹还是文件
  if (fs.statSync(targetPath).isFile()) {
    return curBase
  } else {
    const dirs = arrayDiff(fs.readdirSync(targetPath), ignore_array)
    // 如果是文件夹，则进行递归处理
    // dirs.forEach((dir) => {
    //   createTree(path.resolve(targetPath, dir), level, ignore_array)
    // })
    return { father: curBase, children: dirs }
  }
}

module.exports = createTree
