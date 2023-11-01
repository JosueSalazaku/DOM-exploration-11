//Array of names
const article = document.querySelector("article");
let groups = [
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

//This function generates a random color represented as a hexadecimal value
function getRandomColor() {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// This function is used for sorting the sections randomly
function getRandomOrder() {
	return Math.random() - 0.5;
}

/*This function calculates the contrast color (either black or white) based on the brightness of the provided hex color.*/
function getContrastColor(hexColor) {
	const r = parseInt(hexColor.substr(1, 2), 16);
	const g = parseInt(hexColor.substr(3, 2), 16);
	const b = parseInt(hexColor.substr(5, 2), 16);
	const brightness = (r * 299 + g * 587 + b * 114) / 1000;

	// console.log(getRandomColor());
	return brightness > 128 ? "#000000" : "#FFFFFF";
}

// This event listener waits for the DOM content to be fully loaded before executing the provided function.
document.addEventListener("DOMContentLoaded", function () {
	/* This loop iterates through the list of names (groups). For each name and creates section element, 
sets random bg-color for section , creates p element ans appens p to section and append section to article element */
	for (const group of groups) {
		const section = document.createElement("section");
		const bgColor = getRandomColor();

		section.style.backgroundColor = bgColor;

		const paragraph = document.createElement("p");
		paragraph.textContent = group;

		const contrastColor = getContrastColor(bgColor);

		paragraph.style.color = contrastColor;

		section.appendChild(paragraph);
		article.appendChild(section);
	}

	const sections = Array.from(article.querySelectorAll("section"));

	sections.sort(getRandomOrder);

	sections.forEach((section) => {
		article.appendChild(section);
	});
});
