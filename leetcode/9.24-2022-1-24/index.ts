;(() => {
  // 9.24 两两交换链表中的节点
  class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val
      this.next = next === undefined ? null : next
    }
  }

  function swapPairs(head: ListNode | null): ListNode | null {
    let dummy = new ListNode()
    dummy.next = head
    let current = dummy
    while (current.next !== null && current.next.next !== null) {
      let n1 = current.next
      let n2 = current.next.next
      current.next = n2
      n1.next = n2.next
      n2.next = n1
      current = n1
    }
    return dummy.next
  }
  let list = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    },
  }
  console.log(swapPairs(list))
})()
