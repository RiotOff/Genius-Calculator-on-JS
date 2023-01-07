// Гениальный калькулятор на JavaScript

"use strict" // Строгий режим

function calculator() {
	// Два числа
	let a, b;

	// Первая переменная
	function firstNumber() {
		a = 1; // Первое число
	}

	// Вторая переменная
	function nextNumber() {
		b = 2; // Второе число
	}
	
	firstNumber() // Вызвать функцию с первым числом
	nextNumber() // Вызвать функцию со вторым числом

	let numSumm = a + b; // Результат двух чисел
	console.log(numSumm); // Вывести в консоль результат
}
calculator(); // Вызвать функцию калькулятора