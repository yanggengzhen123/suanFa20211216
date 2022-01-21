// 3、无重复字符的最长子串
/**
 * @variation i,j,maxlength,Set i，j双指针，maxlength最大长度，set存储
 */
;(() => {
  let s: string = 'qrsvbspk'
  const lengthOfLongestSubstring = (s: string): number => {
    let i: number = 0
    let j: number = 0
    let maxLength: number = 0
    let set: Set<unknown> = new Set()
    for (i; i < s.length; i++) {
      if (!set.has(s[i])) {
        set.add(s[i])
        maxLength = Math.max(maxLength, set.size)
      } else {
        while (set.has(s[i])) {
          set.delete(s[j])
          j++
        }
        set.add(s[i])
      }
    }
    return maxLength
  }
  console.log(lengthOfLongestSubstring(s))
})()
