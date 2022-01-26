;(() => {
  //15.62 不同路径
  //输入 m = 3, n = 7
  //输出 28
  // 最后输出的是
  /** memo : number[][]
   * [1,1,1]
   * [1,2,3]
   * [1,3,6]
   * [1,4,10]
   * [1,5,15]
   * [1,6,21]
   * [1,7,28]
   */
  function uniquePaths(m: number, n: number): number {
    // 声明一维数组
    const memo: number[][] = []
    for (let i = 0; i < n; i++) {
      memo.push([]) //二维数组
    }
    // 把第一行第一列初始化为1
    for (let row = 0; row < n; row++) {
      memo[row][0] = 1
    }
    for (let col = 0; col < m; col++) {
      memo[0][col] = 1
    }
    for (let row = 1; row < n; row++) {
      for (let col = 1; col < m; col++) {
        memo[row][col] = memo[row - 1][col] + memo[row][col - 1]
      }
    }
    console.log(memo[n - 1][m - 1])
    return memo[n - 1][m - 1]
  }
  uniquePaths(3, 7)
})()
