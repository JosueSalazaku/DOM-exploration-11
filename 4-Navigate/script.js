const ol = document.querySelector("ol");
const a = ol.children[4]; // the last child
const b = ol.children[0]; // the first child

ol.insertBefore(a, b);

const section3 = document.getElementById("section3");
const section2 = document.getElementById("section2");

const h2InSection2 = section2.querySelector("h2"); // selecting the h2 elements inside the different sections
const h2InSection3 = section3.querySelector("h2");

section2.appendChild(h2InSection3);
section3.appendChild(h2InSection2);

// console.log(section3.children[0]);
// console.log(section2.children[0]);

const lastSection = document.querySelector("section:last-child");
lastSection.parentElement.removeChild(lastSection);

console.log(lastSection);
