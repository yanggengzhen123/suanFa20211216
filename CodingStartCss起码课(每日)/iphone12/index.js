const h1 = document.querySelector('h1')
document.addEventListener("scroll", (e) => {
    let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    console.log(document.documentElement.scrollTop)
    console.log(document.documentElement.scrollHeight)
    console.log(document.documentElement.clientHeight)
    console.log(scrolled) // 从0到1
    h1.style.setProperty('--percentage', `${scrolled * 100}%`)
})