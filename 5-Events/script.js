const _initTime = Date.now();
const newDiv = document.createElement("div");
const displayeSquareWrapper = document.querySelector("displayedsquare-wrapper");
newDiv.classList.add("displayeSquare");

const loglist = document.querySelector("ul");
const newLog = document.createElement("li");

document.body.addEventListener("keypress", function (event) {
	if (event.keyCode === 32) {
		const randomColor =
			"#" + Math.floor(Math.random() * 16777215).toString(16);
		document.body.style.backgroundColor = randomColor;
		console.log(randomColor);
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
