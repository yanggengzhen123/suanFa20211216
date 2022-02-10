// 盗用构造函数继承
// 很简单，在子类构造函数中调用父类构造函数，注意要用call改this指向
// 解决了原型链继承的2个问题，引用类型共享问题和传参问题
// 缺点：由于方法必须定义在构造函数中，所以会导致每次创建子类实例都会创建一次方法
function Father(val) {
  this.val = val
  this.getVal = function () {
    console.log(this.val)
  }
}
function Children(val) {
  // 在子类构造函数中调用父类构造函数
  Father.call(this, val)
}
const children = new Children(111)
children.getVal()
