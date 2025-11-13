const listItems2 = document.querySelectorAll("img")

let classes = []

function toggleDone(e) {
  if (e.button === 0) e.target.classList.toggle(`flip_vert`)
  else if (e.button === 2) e.target.classList.toggle(`flip_gor`)
}

listItems2.forEach((item) => {
  item.addEventListener("mousedown", toggleDone);
  item.addEventListener("contextmenu", (e) => e.preventDefault());
});