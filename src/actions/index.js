const path = require("node:path")
const handleIgnore = require("./handleIgnore")
const createDirTree = require("./createDirTree")
const renderDirTree = require("./renderDirTree")

const handleAction = (options) => {
  const { directory, level, ignore } = options
  // 需要忽略的文件、文件夹的数组
  const ignore_array = handleIgnore(ignore)
  // 获取输入的绝对路径
  const targetPath = path.resolve(process.cwd(), directory)
  // 获取树结构目录数据
  const dirTree = createDirTree(targetPath, level, ignore_array)
  // 控制台打印树结构目录
  renderDirTree(dirTree)
}

module.exports = handleAction
