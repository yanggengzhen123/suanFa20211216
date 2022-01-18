;(() => {
  // 5.19. 删除链表的倒数第 N 个结点
  class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val
      this.next = next === undefined ? null : next
    }
  }
  function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // 这道题用双指针的做法
    // 创建dumy并添加到链表头部
    let dummy = new ListNode()
    dummy.next = head
    // 创建快慢双指针(n2要比n1提前n个针位) // n2比n1多n个身位，但是我们要的是n1的前一位
    let n1 = dummy
    let n2 = dummy
    for (let i = 0; i <= n; i++) {
      n2 = n2.next!
    }
    while (n2 !== null) {
      n1 = n1.next!
      n2 = n2.next!
    }
    n1.next = n1.next!.next
    return dummy.next
  }
})()
