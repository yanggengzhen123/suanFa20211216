// 原型链继承
// 缺点1 ：原型重包含的引用类型属性将被所有实例共享
// 缺点2 ：子类在实例化的时候不能给父类构造函数`传参`
function Father() {
  this.val = 1
}
Father.prototype.getVal = function () {
  console.log(this.val)
}
function Children() {}
// 重要的一行Children继承Father的 `方法`
//解释 child实例可以Children.prototype上的方法，new Father()是Father的实例对象
// Children.prototype = Father.prototype //错误的，这样this.val的值为undefined
Children.prototype = new Father()
const child = new Children()
child.getVal()
