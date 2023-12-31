const firstName = document.getElementById("firstname");
const displayFirstname = document.getElementById("display-firstname");

firstName.addEventListener("keyup", function () {
	const inputText = this.value;
	displayFirstname.textContent = inputText;
});

const numbers = document.querySelectorAll('input[type="number"]');
const age = document.getElementById("age");
const hardTruth = document.getElementById("a-hard-truth");

numbers.forEach(function (input) {
	input.addEventListener("keyup", function () {
		if (age.value < 18) {
			hardTruth.style.visibility = "none";
		} else {
			hardTruth.style.visibility = "hidden";
		}
	});
});

const password = document.getElementById("pwd");
const pwdConfirm = document.getElementById("pwd-confirm");

password.addEventListener("keyup", function () {
	const passwordValue = this.value;

	if (passwordValue.length < 6) {
		this.style.border = "2px solid red";
	} else {
		this.style.border = "1px solid black";
	}
});

pwdConfirm.addEventListener("keyup", function () {
	const pwdConfirmValue = this.value;
	const passwordValue = password.value;

	if (pwdConfirmValue !== passwordValue || passwordValue.length < 6) {
		this.style.border = "2px solid red";
	} else {
		this.style.border = "1px solid black";
	}
});

const body = document.body;
const darkMode = document.getElementById("toggle-darkmode");

darkMode.addEventListener("change", function () {
	const selectedMode = darkMode.value;

	if (selectedMode === "dark") {
		document.body.style.backgroundColor = "rgb(0, 0, 0)";
		document
			.querySelectorAll("p, h1, h2, input, span")
			.forEach((element) => {
				element.style.color = "rgb(255, 255, 255)";
			});
	} else {
		document.body.style.backgroundColor = "";
		document
			.querySelectorAll("p, h1, h2, input, span")
			.forEach((element) => {
				element.style.color = "rgb(0, 0, 0)";
			});
	}
});
