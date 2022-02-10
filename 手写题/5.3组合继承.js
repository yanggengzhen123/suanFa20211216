// 组合继承：原型链继承和构造函数继承的组合
function Father(val) {
  this.val = val
  this.getVal = function () {
    console.log(val)
  }
}
function Children(val) {
  Father.call(this, val)
}
Children.prototype = new Father()
let child2 = new Children(222)
child2.getVal()
