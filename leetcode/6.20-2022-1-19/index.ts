;(() => {
  // 6.20. 有效的括号
  //给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
  //有效字符串需满足：
  //左括号必须用相同类型的右括号闭合。
  //左括号必须以正确的顺序闭合。
  function isValid(s: string): boolean {
    // 这道题用栈的思想（先入后出）
    // 1、创建一个`HashMap`,把括号配对放进去
    // 2、创建一个`stack(Array)`,for循环遍历字符串，对于每一个字符，如果map里有这个key,那说明它是个左括号，从map里取得相对应的右括号，把它push进stack里，否则的话，它就是右括号，需要pop出stack里的第一个字符然后看它是否等于当前的字符，如果不相符，则返回false<br/>
    // 3、循环结束后，如果stack不为空，说明还剩一些左括号没有被闭合，返回false,否则返回true
    const mappings = new Map()
    mappings.set('(', ')')
    mappings.set('[', ']')
    mappings.set('{', '}')
    // 创建一个栈
    const stack: string[] = []
    for (let i = 0; i < s.length; i++) {
      if (mappings.has(s[i])) {
        stack.push(mappings.get(s[i]))
      } else {
        if (stack.pop() !== s[i]) {
          return false
        }
      }
    }
    // 因为每次都pop（）出去，最后的栈元素应该是空的
    if (stack.length !== 0) {
      return false
    }
    return true
  }
})()
