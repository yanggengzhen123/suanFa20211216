;(() => {
  //19.92 反转链表
  // 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
  // class ListNode {
  //   val: number
  //   next: ListNode | null
  //   constructor(val?: number, next?: ListNode | null) {
  //     this.val = val === undefined ? 0 : val
  //     this.next = next === undefined ? null : next
  //   }
  // }
  // function reverseList(head: ListNode | null): ListNode | null {
  //   let prev = null,
  //     curr = head
  //   while (curr) {
  //     const next = curr.next
  //     curr.next = prev
  //     prev = curr
  //     curr = next
  //   }
  //   return prev
  // }
  // let head = {
  //   val: 1,
  //   next: {
  //     val: 2,
  //     next: {
  //       val: 3,
  //       next: null,
  //     },
  //   },
  // }
  let arr = [1, [2, [3]]]
  // console.log(reverseList(head))
  function flat3(arr: any[]) {
    while (arr.some((item) => Array.isArray(item))) {
      console.log(arr)
      arr = [].concat(...arr)
    }
    return arr
  }
  console.log(flat3(arr))
})()
