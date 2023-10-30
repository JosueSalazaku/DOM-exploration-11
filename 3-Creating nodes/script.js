const modifyArticle = document.querySelector("article");
const groups = ["Kobe", "Manu", "Kyrie", "Bron"];

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

for (const group of groups) {
  const section = document.createElement("section");
  section.style.backgroundColor = getRandomColor();

  const paragraph = document.createElement("p");
  paragraph.textContent = groups;

  section.appendChild(paragraph);
  modifyArticle.appendChild(section);
}
