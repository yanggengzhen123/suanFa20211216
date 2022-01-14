(() => {
    const array1 = [1, 5, 4, 3, 2, 1]
    function unique(array) {
        // 1、对数组本身去重（双重for循环）
        // for (let i = 0; i < array.length; i++) {
        //     for (let j = i + 1; j < array.length; j++) {
        //         if (array[i] === array[j]) {
        //             array.splice(j, 1)
        //             j--
        //         }
        //     }
        // }
        // return array

        // 2、数组本身不变,只得到一个去重后的数组
        // 2.1 Set
        // return [...new Set(array1)]
        // 2.2 创建一个新数组来存取
        // let newSetArray = []
        // for (let i = 0; i < array.length; i++) {
        //     if (newSetArray.indexOf(array[i])) {
        //         newSetArray.push(array[i])
        //     }
        // }
        // return newSetArray
        // 2.3 reduce
        return array.reduce((accu, cur) => {
            if (!accu.includes(cur)) {
                accu.push(cur)
            }
            return accu //记得最后return出去
        }, [])
    }
    unique(array1)
})()