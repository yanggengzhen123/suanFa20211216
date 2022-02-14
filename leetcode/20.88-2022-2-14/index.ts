;(() => {
  /**
 Do not return anything, modify nums1 in-place instead.
 */
  function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // 条件：只能在nums1上修改
    // 方法1：splice替换0,sort排序 时间复杂度：O((m+n)log(m+n)) 空间复杂度：O(log(m+n))
    // nums1.splice(m,n,...nums2)
    // nums1.sort((a,b) => a - b)
    // 方法2：双指针(中等) 时间复杂度：O(m+n) 空间复杂度：O(m+n)
    // let p1:number = 0
    // let p2:number = 0
    // const sort:number[] = new Array(m + n).fill(0)
    // let cur
    // while(p1 < m || p2 < n){
    //     if(p1 === m){
    //         cur = nums2[p2++]
    //     }else if(p2 === n){
    //         cur = nums1[p1++]
    //     }else if(nums1[p1] < nums2[p2]){
    //         cur = nums1[p1++]
    //     }else{
    //         cur = nums2[p2++]
    //     }
    //     sort[p1 + p2 - 1] = cur
    // }
    // for(let i = 0;i<m + n;i++){
    //     nums1[i] = sort[i]
    // }
    // 方法3：逆向双指针(难) 时间复杂度：O(m+n) 空间复杂度：O(1)
    let p1 = m - 1
    let p2 = n - 1
    let tail = m + n - 1
    let cur
    while (p1 >= 0 || p2 >= 0) {
      if (p1 === -1) {
        cur = nums2[p2--]
      } else if (p2 === -1) {
        cur = nums1[p1--]
      } else if (nums1[p1] < nums2[p2]) {
        cur = nums2[p2--]
      } else {
        cur = nums1[p1--]
      }
      nums1[tail--] = cur
    }
  }
})()
