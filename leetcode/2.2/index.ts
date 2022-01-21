;(() => {
  // 2.2两数相加
  class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val
      this.next = next === undefined ? null : next
    }
  }

  function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
  ): ListNode | null {
    let list = new ListNode()
    let dummy = list
    let sums = 0
    let carry = 0
    // 这里 sums > 0 是要注意到最后l1和l2跑完sums有值的情况
    while (l1 !== null || l2 !== null || sums > 0) {
      if (l1 !== null) {
        sums += l1.val
        l1 = l1.next
      }
      if (l2 !== null) {
        sums += l2.val
        l2 = l2.next
      }
      if (sums >= 10) {
        // nums = nums % 10
        sums = sums - 10
        carry = 1
      }
      dummy.next = new ListNode(sums)
      sums = carry
      carry = 0
      dummy = dummy.next
    }
    return list.next
  }
})()
