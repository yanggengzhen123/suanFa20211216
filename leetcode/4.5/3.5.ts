// 最长回文子串（回文的意思是正着念和倒着念一样）
;(() => {
  let s: string = 'babad'
  function longestPalindrome(s: string): string {
    // 如果字符串小于2,直接返回原字符串
    if (s.length < 2) {
      return s
    }
    let start: number = 0 //回文字符串的起始位置
    let maxLength: number = 1 //这里为什么不设置初始化为0呢？可以想像参数s如果为ab，那返回的最大长度应该是1，而不是0.所以maxlength初始值应该为1
    // 创建函数（三个条件）
    // 1、判断左边和右边是否越界，
    // 2、同时最左边的字符是否等于最右边的字符
    // 3、如果以上3个条件都满足，则判断是否需要更新回文字符串最大长度及最大字符串的起始位置，然后left--,right++，继续判断，直到不满足三个条件之一
    function expendAroundCenter(left: number, right: number) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        //索引 + 1
        if (right - left + 1 > maxLength) {
          maxLength = right - left + 1
          start = left
        }
        left--
        right++
      }
    }
    // 对s的每个值进行循环遍历
    for (let i: number = 0; i < s.length; i++) {
      //有两种情况，（单数和双数）例如aba,abab
      expendAroundCenter(i - 1, i + 1)
      expendAroundCenter(i, i + 1)
    }
    return s.substring(start, start + maxLength)
  }
  console.log(longestPalindrome(s))
})()
