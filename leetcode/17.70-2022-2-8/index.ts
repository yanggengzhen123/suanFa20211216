;(() => {
  //16.70 爬楼梯（斐波那契数列）
  // 1，2，3，5，8，13 得出结论，当前值是前两个值的和
  function climbStairs(n: number): number {
    const memo: number[] = []
    memo[1] = 1
    memo[2] = 2
    for (let i: number = 3; i <= n; i++) {
      memo[i] = memo[i - 1] + memo[i - 2]
    }
    return memo[n]
  }
  console.log(climbStairs(6))
})()
