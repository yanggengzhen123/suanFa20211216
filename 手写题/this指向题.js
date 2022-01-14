(() => {
    var name = 1
    function test() {
        var name = 2
        console.log(this.name)
        return function inner() {
            console.log(name);
        }
    }
    test() //1 这里是window.test() this指向window，
    test()() //1 2 第一次执行test同样指向window,第二次执行闭包，闭包没有找到name,向上查找，得到name = 2
    var b = {
        name: 3
    }
    b.test = test
    b.test() //3 b调用的 this指向b
    var c = b.test
    c() //1 window.c 
    new test() //undefined this指向实例，但实例并没有，所以是undefined
})()

