// 两数之和
// 1、暴力破解,注意边界问题
function twoSum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
console.log(twoSum([3, 2, 4], 6));