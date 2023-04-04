/**
 * 从arr1中剔除arr2包含的值
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
const arrayDiff = (arr1, arr2) => {
  const res = []
  arr1.forEach((item) => {
    if (!arr2.includes(item)) {
      res.push(item)
    }
  })
  return res
}

module.exports = arrayDiff
