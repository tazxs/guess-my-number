"use strict";
//! ДОБАВИЛ ФУНКЦИЙ ВЫВОДА СООБЩЕНИЙ И ПОЯВЛЕНИЯ РАНДОМНОГО ЧИСЛА ТАК КАК ОНИ ОЧЕНЬ ЧАСТО ВСТРЕЧАЛИСЬ В КОДЕ
function generateRandomNumber() {
	return Math.trunc(Math.random() * 20) + 1;
}
function displayMessage(msg) {
	message.textContent = msg;
}
const number = document.querySelector(".number");
const button = document.querySelector(".check");
const again = document.querySelector(".again");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScoreElement = document.querySelector(".highscore");

let RandomNumber = generateRandomNumber();
let scoreCount = 20;
let highScore = 0;
button.addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value); //! ВАЖНО ВСЕГДА НУЖНО ПОМЕЩАТЬ ВНУТРИ ПРОСЛУШИВАТЕЛЯ СОБЫТИЙ ЧТО БЫ ЗНАЧЕНИЕ ИНПУТА СЧИТЫВАЛОСЬ КАЖДЫЙ РАЗ ПРИ КЛИКЕ НА КНОПКУ А НЕ ТОЛЬКО ОДИН РАЗ, ЕСЛИ ВОТ ЭТО ОПРЕДЕЛЕНИЕ НАХОДИТСЯ ВНЕ ИВЕНТ ХЕНДЛЕРА ТО ТОГДА ЗНАЧЕНИЕ СОХРАНИТСЯ ЛИШЬ ОДИН РАЗ
	if (!guess) {
		displayMessage("No number");
	} else if (guess === RandomNumber) {
		displayMessage("Correct");
		number.textContent = RandomNumber.toString();
		document.body.style.backgroundColor = "green"; //! лучше сразу изменить сам стиль блока чем обращаться к нему через куэриселектор
		number.style.width = "30rem";
		if (scoreCount > highScore) {
			highScore = scoreCount;
			highScoreElement.textContent = highScore;
		}
	} else if (guess > RandomNumber) {
		if (scoreCount > 1) {
			displayMessage(
				guess > RandomNumber
					? "Число больше, чем нужное"
					: "Число меньше чем нужное"
			);
			scoreCount--;
			score.textContent = scoreCount.toString();
		} else {
			displayMessage("You lose 😰");
		}
	}
});
again.addEventListener("click", function () {
	const guess = document.querySelector(".guess");
	RandomNumber = generateRandomNumber();
	document.body.style.backgroundColor = "#222";
	message.textContent = "Start guessing...";
	number.style.width = "15rem";
	number.textContent = "?";
	scoreCount = 20;
	score.textContent = scoreCount.toString();
	guess.value = "";
});
