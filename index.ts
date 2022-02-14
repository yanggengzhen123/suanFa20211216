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
  let nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [2, 5, 6],
    n = 3
  // //逆向双指针
  // var merge = function (
  //   nums1: number[],
  //   m: number,
  //   nums2: number[],
  //   n: number
  // ) {
  //   let p1 = m - 1,
  //     p2 = n - 1
  //   let tail = m + n - 1
  //   var cur
  //   while (p1 >= 0 || p2 >= 0) {
  //     if (p1 === -1) {
  //       cur = nums2[p2--]
  //     } else if (p2 === -1) {
  //       cur = nums1[p1--]
  //     } else if (nums1[p1] > nums2[p2]) {
  //       cur = nums1[p1--]
  //     } else {
  //       cur = nums2[p2--]
  //     }
  //     nums1[tail--] = cur
  //   }
  // }
  var merge = function (
    nums1: number[],
    m: number,
    nums2: number[],
    n: number
  ) {
    let p1 = 0,
      p2 = 0
    const sorted = new Array(m + n).fill(0)
    var cur
    while (p1 < m || p2 < n) {
      if (p1 === m) {
        cur = nums2[p2++]
      } else if (p2 === n) {
        cur = nums1[p1++]
      } else if (nums1[p1] < nums2[p2]) {
        cur = nums1[p1++]
      } else {
        cur = nums2[p2++]
      }
      sorted[p1 + p2 - 1] = cur
    }
    for (let i = 0; i != m + n; ++i) {
      nums1[i] = sorted[i]
    }
  }
  merge(nums1, m, nums2, n)
})()
