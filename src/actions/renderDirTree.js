const renderDirTree = (dirTree, level = 0) => {
  const indent = "  ".repeat(level)
  console.log(`${indent}${dirTree.value}`)

  for (const child of dirTree.children) {
    renderDirTree(child, level + 1)
  }
}

module.exports = renderDirTree
