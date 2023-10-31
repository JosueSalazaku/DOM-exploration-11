const modifyArticle = document.querySelector("article");
const groups = [
	"Lucas",
	"Kilian",
	"Alec",
	"Mohamed",
	"Pieter",
	"Rebecca",
	"Alessandro",
	"Josué",
	"Thibault",
	"Eduarda",
	"Mohammed",
	"Funda",
	"Luis",
	"Alexandru",
	"Andrej",
	"Danté",
	"jonasi",
	"Kelsey",
	"Rana",
	"Jana",
	"Sieglinde",
	"Gustave",
	"Sezin",
	"Thierry",
	"Sylvie",
	"Anaïs",
];

function getRandomColor() {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

for (const group of groups) {
	const section = document.createElement("section");
	section.style.backgroundColor = getRandomColor();

	const paragraph = document.createElement("p");
	paragraph.textContent = group;

	section.appendChild(paragraph);
	modifyArticle.appendChild(section);
}

function getRandomOrder() {
	return Math.random() - 0.5;
}

function getContrastColor(hexColor) {
	const r = parseInt(hexColor.substr(1, 2), 16);
	const g = parseInt(hexColor.substr(3, 2), 16);
	const b = parseInt(hexColor.substr(5, 2), 16);
	const brightness = (r * 299 + g * 587 + b * 114) / 1000;

	return brightness > 128 ? "#000000" : "#FFFFFF";
}

document.addEventListener("DOMContentLoaded", function () {
	const modifyArticle = document.querySelector("article");
	const sections = Array.from(modifyArticle.querySelectorAll("section"));

	sections.sort(getRandomOrder);

	sections.forEach((section) => {
		const bgColor =
			getComputedStyle(section).getPropertyValue("background-color");
		const contrastColor = getContrastColor(bgColor);
		section.style.color = contrastColor;
		modifyArticle.appendChild(section);
	});
});
