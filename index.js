var reduceBy = function (groupReducer, getInitialGroupValue, getKey, array) {
  getInitialGroupValue = getInitialGroupValue || function () {}
  return array.reduce(function (acc, v) {
    var key = getKey(v)
    var group = acc.hasOwnProperty(key) ? acc[key] : getInitialGroupValue()
    acc[key] = groupReducer(group, v)
    return acc
  }, {}, array)
}

module.exports = reduceBy
