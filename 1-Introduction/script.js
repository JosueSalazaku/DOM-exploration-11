// const domExploration = document.querySelector("");
const displayDocument = document.getElementsByTagName("body");

document.title = "Modifying the DOM";
console.log(document.title);

function randomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);

  document.body.style.background = bgColor;
}
randomColor();

const getChildren = document.body.children[0];

for (const child of getChildren.children) {
  console.log(child);
  console.log(getChildren);
}
