const ol = document.querySelector("ol");
const a = ol.children[4]; // the last child
const b = ol.children[0]; // the first child

ol.insertBefore(a, b);

// const section3 = document.getElementById("section3");
// const section2 = document.getElementById("section2");

const section3 = document.body.children[1].children[1];
const section2 = document.body.children[1].children[2];

const h2InSection2 = section2.children[0].children[0];
const h2InSection3 = section3.children[0];

// section2.appendChild(h2InSection3);
// section3.appendChild(h2InSection2);

console.log(section3.children[0]);
console.log(section2.children[0].children[1]);

const lastSection = document.querySelector("section:last-child");
lastSection.parentElement.removeChild(lastSection);
