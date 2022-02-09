;(() => {
  //18.73 矩阵置零
  // 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
  function setZeroes(matrix: number[][]): void {
    // 声明两个哈希变量，分别存储两次
    let row: { [x: string]: any } = {}
    let colums: { [x: string]: any } = {}

    // 第一遍遍历，找原始0位置
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] === 0) {
          row[i] = 1
          colums[j] = 1
        }
      }
    }

    // 第二次遍历，存在的置零
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (row[i] || colums[j]) {
          matrix[i][j] = 0
        }
      }
    }
    console.log(matrix)
  }
  const matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ]
  console.log(setZeroes(matrix))
})()
