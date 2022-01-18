;(() => {
  // 4.15 三数之和
  const nums: number[] = [-1, 0, 1, 2, -1, -4]

  function threeSum(nums: number[]): number[][] {
    const ans: number[][] = []
    if (nums === null || nums.length < 3) return ans
    // 从小到大排序(升序)(假设a为1，b为2,a - b为升序)
    nums.sort((a, b) => a - b)
    // 前提须知，break是跳出循环，continue是跳出当前循环到下一个循环
    for (let i = 0; i < nums.length; i++) {
      // 如果当前数字大于0，则三数之和一定大于0,所以结束循环
      if (nums[i] > 0) break
      // 去重(从第二个i开始，i对应的值等于i的上一个值，则跳出当前循环)
      if (i > 0 && nums[i] === nums[i - 1]) continue
      let L = i + 1
      let R = nums.length - 1
      while (L < R) {
        const sum = nums[i] + nums[L] + nums[R]
        if (sum === 0) {
          ans.push([nums[i], nums[L], nums[R]])
          while (L < R && nums[L] == nums[L + 1]) L++ // L去重
          while (L < R && nums[R] == nums[R - 1]) R-- // R去重
          L++
          R--
        } else if (sum < 0) {
          L++
        } else if (sum > 0) {
          R--
        }
      }
    }
    return ans
  }
})()
