;(() => {
  class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val
      this.next = next === undefined ? null : next
    }
  }

  function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
  ): ListNode | null {
    let curr = new ListNode()
    let dummy = curr //创建一个指针指向第一个节点的链表
    while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
        curr.next = list1
        list1 = list1.next
      } else {
        curr.next = list2
        list2 = list2.next
      }
      curr = curr.next
    }
    if (list1 !== null) {
      curr.next = list1
    }
    if (list2 !== null) {
      curr.next = list2
    }
    return dummy.next
  }
  let list1 = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 4,
        next: null,
      },
    },
  }
  let list2 = {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      },
    },
  }
  console.log(mergeTwoLists(list1, list2))
})()
