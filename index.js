// 1) Даны переменные a и b. Найдите найдите модуль разности a и b.
// Проверьте работу скрипта самостоятельно для различных a и b.
//
// 2) Даны переменные a и b.
// Отнимите от a переменную b и результат присвойте переменной c.
// Сделайте так, чтобы в любом случае в переменную c записалось положительное значение.
// Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.


const num1 = Number(prompt('Enter the first number'));
const num2 = Number(prompt('Enter the second number'));

alert(`Модуль разности ${num1} и ${num2} = ${Math.abs(num1 - num2)}`)