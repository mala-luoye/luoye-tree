const handleIgnore = (ignoreStr) => {
  return ignoreStr ? ignoreStr.split(" ") : []
}

module.exports = handleIgnore
