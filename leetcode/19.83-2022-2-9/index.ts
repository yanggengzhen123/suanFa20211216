;(() => {
  //19.83 删除排序链表中的重复元素
  class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val
      this.next = next === undefined ? null : next
    }
  }
  function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) {
      return head
    }
    let curr = head
    while (curr.next) {
      if (curr.val === curr.next.val) {
        // 记得这里是curr.next不是curr，
        // curr = curr.next不会引起原来链表的变化，curr.next = curr.next.next!就会
        // 删除下一个节点（指针跳过下个节点）
        curr.next = curr.next.next
      } else {
        // 把当前节点往后挪一位
        curr = curr.next
      }
    }
    return head
  }
  let head = {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: null,
      },
    },
  }
  deleteDuplicates(head)
})()
