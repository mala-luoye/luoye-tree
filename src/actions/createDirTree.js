const fs = require("node:fs")
const path = require("node:path")
const { arrayDiff } = require("../utils")

// 目录节点类
class DirNode {
  constructor(value) {
    this.value = value
    this.children = []
  }
  // 添加子节点
  appendChild(dirNode) {
    this.children.push(dirNode)
  }
}

// 创建目录树
const createDirTree = (targetPath, level, ignore_array) => {
  // 创建根节点
  const rootDirNode = new DirNode(path.basename(targetPath))
  // 文件夹递归创建子节点
  const createDirNode = (dirNode, tpath) => {
    if (fs.statSync(tpath).isDirectory()) {
      const dirs = arrayDiff(fs.readdirSync(tpath), ignore_array)
      dirs.forEach((dir) => {
        const newDirNode = new DirNode(dir)
        dirNode.appendChild(newDirNode)
        createDirNode(newDirNode, path.resolve(tpath, dir))
      })
    }
  }
  createDirNode(rootDirNode, targetPath)
  return rootDirNode
}

module.exports = createDirTree
