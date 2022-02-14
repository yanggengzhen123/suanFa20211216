;(() => {
  // 数组扁平化
  let arr = [1, [2, [3]]]
  // 第一种方法  Array.prototype.flat
  function flat1(arr) {
    return arr.flat(2)
  }
  console.log(flat1(arr))

  // 第二种方法 es5 递归实现
  function flat2(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // newArr = [...newArr, ...flat2(arr[i])]
        // newArr = newArr.concat(flat2(arr[i]))
        // flat2(arr[i]) 注意，这里是flat2(arr[i])错误的,因为递归的是整个函数，并不是递归for循环，最后ruturn出新的newArr,例如[2],[3]
        newArr = [...newArr, ...flat2(arr[i])]
      } else {
        newArr.push(arr[i])
      }
    }
    return newArr
  }
  console.log(flat2(arr))
  // 第三种方法 es6实现  while Array.prototype.some
  function flat3(arr) {
    while (arr.some((item) => Array.isArray(item))) {
      // 利用concat的降维作用，不能将concat替换为...
      arr = [].concat(...arr)
    }
    return arr
  }
  console.log(flat3(arr))
})()
