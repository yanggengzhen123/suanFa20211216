;(() => {
  // 13.55 跳跃游戏
  //给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
  //数组中的每个元素代表你在该位置可以跳跃的最大长度。
  //判断你是否能够到达最后一个下标。
  // 方法一（动态规划太难了）
  // 方法二（贪心）
  let nums: number[] = [2, 3, 1, 1, 4]
  // nums   [2, 3, 1, 1, 4] 能够走的步数
  // length  0  1  2  3  4 索引
  function canJump(nums: number[]): boolean {
    let maxJump = nums.length - 1
    for (let i = nums.length - 2; i >= 0; i--) {
      if (nums[i] + i >= maxJump) {
        maxJump = i
      }
    }
    return maxJump === 0
  }
  console.log(canJump(nums))
})()
