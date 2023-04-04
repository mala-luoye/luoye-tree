const path = require("node:path")
const handleIgnore = require("./handleIgnore")
const createDirTree = require("./createDirTree")

const handleAction = (options) => {
  const { directory, level, ignore } = options
  // 需要忽略的文件、文件夹的数组
  const ignore_array = handleIgnore(ignore)
  // 获取输入的绝对路径
  const targetPath = path.resolve(process.cwd(), directory)
  const dirTree = createDirTree(targetPath, level, ignore_array)
  console.log(dirTree)
  // console.log(dirTree.children[0].children)
}

module.exports = handleAction
