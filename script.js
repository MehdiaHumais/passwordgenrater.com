let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbol = document.getElementById("symbol");
let genBtn = document.getElementById("genBtn");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
	sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', () => {
	passBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "`~@#$%^&*?";

function generatePassword() {
	let genPassword = "";
	let allChars = "";
	
	allChars += lowercase.checked ? lowerChars : "";
	allChars += uppercase.checked ? upperChars : "";
	allChars += numbers.checked ? allNumbers : "";
	allChars += symbol.checked ? allSymbols : "";
	
	if (allChars === "") {
		alert("Please select at least one character set!");
		return "";
	}
	
	for (let i = 0; i < inputSlider.value; i++) {
		genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
	}
	return genPassword;
}
