;(() => {
  // 10.53 最大子数组和
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  // function maxSubArray(nums: number[]): number {
  //   let ans = nums[0]
  //   let sum = 0
  //   for (const i of nums) {
  //     if (sum > 0) {
  //       sum += i
  //     } else {
  //       sum = i
  //     }
  //     ans = Math.max(ans, sum)
  //   }
  //   console.log(ans)
  //   return ans
  // }
  function maxSubArray(nums: number[]): number {
    const memo = []
    memo[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
      memo[i] = Math.max(nums[i] + memo[i - 1], nums[i])
    }
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
      max = Math.max(max, memo[i])
    }
    return max
  }
  maxSubArray(nums)
})()
