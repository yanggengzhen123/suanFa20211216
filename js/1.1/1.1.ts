// 两数之和
// 1、暴力破解,注意边界问题
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}

// 哈希HashMap
let HashMaptwoSum = function (nums: number[], target: number): number[] {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
}
export { twoSum, HashMaptwoSum }
console.log(HashMaptwoSum([3, 2, 4], 6))
