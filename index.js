// Выведите на экран случайное целое число от 1 до 100.
// Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while).

const res = [];
const DELIMITER = 10;

for(let i = 0; i < DELIMITER; ++i)
{
  res.push(Math.round(Math.random()*10));
}

alert(res);