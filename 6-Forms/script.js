/* 
Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance
turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.

Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use,
we'll say that the dark mode is just turning the background black and the text white. */

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
			hardTruth.style.display = "none";
		} else {
			hardTruth.style.display = "block";
		}
	});
});

const password = document.getElementById("pwd");
const pwdConfirm = document.getElementById("pwd-confirm");

console.log(password);
console.log(pwdConfirm);

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
