/* Add a keyup listener on the first input field, so that once you type a letter in this field,
 it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
 * 
Add a keyup listener on the second input (the number input), so that if the age is below 18 the content
of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.

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
