// 1) Дан массив arr. Найдите среднее арифметическое его элементов.
//    Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
//
// 2) Напишите скрипт, который будет находить факториал числа.
//    Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого.
//    Например, 4! = 1*2*3*4.

const arr = [12, 15, 20, 25, 59, 79];


alert(averageOfArray(arr));

function averageOfArray(arr) {

  let res = 0;

  for (let i = 0; i < arr.length; ++i) {
    res += arr[i];
  }

  if (arr.length > 0)
    return res / arr.length;

}
