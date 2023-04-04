const renderDirTree = (dirTree) => {
  console.log(dirTree.value)
  const printNode = (node, prefix = "", isLast = true) => {
    const newPrefix = prefix + (isLast ? "└── " : "├── ")
    console.log(newPrefix + node.value)
    const lastChildIndex = node.children.length - 1
    node.children.forEach((child, index) => {
      const isLastChild = index === lastChildIndex
      const newChildPrefix = prefix + (isLast ? "    " : "│   ")
      printNode(child, newChildPrefix, isLastChild)
    })
  }
  dirTree.children.forEach((child) => {
    printNode(child)
  })
}

module.exports = renderDirTree
