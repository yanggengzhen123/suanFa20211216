class Father {
  constructor(father) {
    this.father = father
  }
}
class Children extends Father {
  constructor(father, child) {
    super(father)
    this.child = child
  }
  getVal() {
    console.log(this.father, this.child)
  }
}
const child4 = new Children(111, 222)
child4.getVal()
