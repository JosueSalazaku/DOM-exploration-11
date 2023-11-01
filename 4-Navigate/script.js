const ol = document.querySelector("ol");
const a = ol.children[4]; // the last child
const b = ol.children[0]; // the first child

ol.insertBefore(a, b);
