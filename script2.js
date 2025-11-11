const img = document.querySelector(".karusel")
const imgNum = 3
const delay = 2000

let i = 1
setTimeout(function tick(){
    i = i + 1
    if (i > imgNum) i = 1 
    img.src = `images/Moscow${i}.jpg`
    setTimeout(tick, delay)
}, delay)