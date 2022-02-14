;() => {
  // 数组去重
  let arr = [1, 2, 3, 4, 5, 4, 3]
  // 第一种方法 声明一个新数组，利用indexOf
  function unique1(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
    }
    return newArr
  }
  console.log(unique1(arr))
  // 第二种方法， [...new Set(arr)]
  // 第三种方法 双重for循环，splice删除j 记得j--
  function unique2(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1)
          j-- //记得j--
        }
      }
    }
    return arr
  }
  console.log(unique2(arr))
  // 第四种方法 reduce
  function unique3(arr) {
    // Accu是累加器的意思，currd代表当前值
    return arr.reduce((accu, curr) => {
      if (!accu.includes(curr)) {
        accu.push(curr)
      }
      return accu
    }, [])
  }
  console.log(unique3(arr))
}
