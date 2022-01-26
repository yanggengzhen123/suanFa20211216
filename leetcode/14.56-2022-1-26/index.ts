;(() => {
  // 56. 合并区间
  const intervals: number[][] = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]
  function merge(intervals: number[][]): number[][] {
    if (intervals.length < 2) {
      return intervals
    }
    // 需要排序
    intervals.sort((a, b) => a[0] - b[0])
    let curr = intervals[0] // 当前正在被合并的区间
    let result: number[][] = []
    for (let item of intervals) {
      if (item[0] <= curr[1]) {
        curr[1] = Math.max(curr[1], item[1]) //[1,4] [2,3]的情况
      } else {
        result.push(curr)
        curr = item
      }
    }
    //把最后的curr也push进来
    if (curr.length > 0) {
      result.push(curr)
    }
    return result
  }
  merge(intervals)
})()
