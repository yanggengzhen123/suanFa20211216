;(() => {
  function typeOf(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
  }
  let aa = 'aa'
  const data = new Date()
  const nulldata = null
  console.log(typeOf(nulldata))
})()
