;(() => {
  //16.66 加一
  // [1, 9, 9]
  let digits: number[] = [9, 9]
  function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] !== 9) {
        digits[i]++
        return digits //最后一位return
      } else {
        digits[i] = 0
      }
    }
    const result = [1, ...digits]
    return result
  }

  plusOne(digits)
})()
