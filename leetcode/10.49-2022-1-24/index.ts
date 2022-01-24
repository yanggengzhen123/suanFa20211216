;(() => {
  // 10.49 字母异位词分组
  let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
  function groupAnagrams(strs: string[]): string[][] {
    const map = new Map()
    for (let i in strs) {
      // 转换为数组再进行排序，再利用map
      /*
       * Map(3) {
       * 'a,e,t' => [ 'eat', 'tea', 'ate' ],
       * 'a,n,t' => [ 'tan', 'nat' ],
       * 'a,b,t' => [ 'bat' ]
       * }
       */
      let arr = Array.from(strs[i])
      arr.sort()
      let arrString: string = arr.toString()
      let res = map.has(arrString) ? map.get(arrString) : new Array()
      res.push(strs[i])
      map.set(arrString, res)
    }
    // map.values() => { [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] } 转数组
    return Array.from(map.values())
  }
  groupAnagrams(strs)
})()
