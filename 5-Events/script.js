const _initTime = Date.now();

function createDisplayedSquare() {
	const newDiv = document.createElement("div");
	newDiv.classList.add("displayedsquare");
	newDiv.style.backgroundColor = color;

	document.querySelector(".displayedsquare-wrapper").appendChild(newDiv);

	const newLog = document.createElement("li");
	newLog.textContent = "Action done at " + getElapsedTime();
	loglist.appendChild(newLog);
}

const loglist = document.querySelector("ul");

document.body.addEventListener("keypress", function (event) {
	if (event.key === " ") {
		const randomColor =
			"#" + Math.floor(Math.random() * 16777215).toString(16);
		document.body.style.backgroundColor = randomColor;
		console.log(randomColor);
		// Log when the spacebar is used the same way you used for the generated squares.

		const newLog = document.createElement("li");
		newLog.textContent = "Spacebar pressed at " + getElapsedTime();
		loglist.appendChild(newLog);
	} else if (event.key == "1") {
		while (loglist.firstChild) {
			loglist.removeChild(loglist.firstChild);
		}
	}
});

const getElapsedTime = () => {
	return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
	console.log(e.target.classList[1]);
	console.log(getElapsedTime());
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
	actionSquare.addEventListener("click", clickOnSquare);
}
