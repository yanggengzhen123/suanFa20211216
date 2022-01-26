;(() => {
  // 12.54 螺旋矩阵
  function spiralOrder(matrix: number[][]): number[] {
    if (matrix.length === 0) {
      return []
    }
    // 定义四个边界以及当前的方向
    let top: number = 0
    let bottom: number = matrix.length - 1
    let left: number = 0
    let right: number = matrix[0].length - 1
    let direction: string = 'right'
    let result: number[] = []
    /**
     * [1,2,3,4],
     * [5,6,7,8],
     * [9,10,11,12]
     */
    while (left <= right && top <= bottom) {
      // 按右下左上的顺序依次将字符加到result中去
      if (direction === 'right') {
        for (let i = left; i <= right; i++) {
          result.push(matrix[top][i])
        }
        top++
        direction = 'down'
      } else if (direction === 'down') {
        for (let i = top; i <= bottom; i++) {
          result.push(matrix[i][right])
        }
        right--
        direction = 'left'
      } else if (direction === 'left') {
        for (let i = right; i >= left; i--) {
          result.push(matrix[bottom][i])
        }
        bottom--
        direction = 'up'
      } else if (direction === 'up') {
        for (let i = bottom; i >= top; i--) {
          result.push(matrix[i][left])
        }
        left++
        direction = 'right'
      }
    }
    console.log(result)

    return result
  }
  let test = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  spiralOrder(test)
})()
