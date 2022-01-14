class Stack {
    constructor() {
        this.items = []
    }
    // 入栈
    in(value) {
        // 你的代码
        this.items.push(value)
    }
    // 出栈
    out() {
        // 你的代码 
        if (this.size() === 0) return null
        return this.items.pop()
    }
    // 弹出栈（查看栈顶元素）
    top() {
        // 你的代码
        if (this.size() === 0) return null
        return this.items[this.size() - 1]
    }
    // 栈的长度
    size() {
        // 你的代码
        return this.items.length
    }
}
// 要求当执行下列代码时，能输出预期的结果
const stack = new Stack()
stack.in('x')
stack.in('y')
stack.in('z')
stack.top() //输出'z'
stack.size() //输出3
stack.out() //输出'z'
stack.top() //输出'y'
stack.size() //输出 2
