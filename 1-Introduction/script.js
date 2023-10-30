// const domExploration = document.querySelector("");
const displayDocument = document.getElementsByTagName("html");

function randomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);

  document.body.style.background = bgColor;
}
randomColor();

const getChilderen = document.html.children[0];

for (const child of getChilderen.children) {
  console.log(child);
}

console.log(body);
