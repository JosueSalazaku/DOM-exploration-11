// const domExploration = document.querySelector("");
const displayDocument = document.getElementsByTagName("body");

function randomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);

  document.body.style.background = bgColor;
}
randomColor();

// const getChilderen = document.body.children[1];

// for (const child of getChilderen.children) {
//   console.log(child);
// }

// console.log(body);
