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
Children.prototype = Object.create(Father.prototype)
Father.prototype.constructor = Children
let child3 = new Children(222)
child3.getVal()
