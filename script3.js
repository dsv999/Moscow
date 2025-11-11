const listItems2 = document.querySelectorAll("img")

function toggleDone(e) {
 if (!e.target.className){
  e.target.className = "flip_vert"
 } else {
  e.target.className = ""
 }
}

listItems2.forEach((item) => {
  item.addEventListener("click", toggleDone);
})