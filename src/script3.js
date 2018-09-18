/* Код ниже получает из массива строк новый массив, содержащий их длины: */
var arr = ["Флоренция",  "-", "город", "зарождение", "Ренессанса"];

var arrLength = [];
for (var i = 0; i<arr.length; i++) {
	arrLength[i] = arr[i].length;
}
console.log(arrLength);

/* Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.*/
let counts = arr.map(function(name) {
	return name.length;
})



/* На входе массив чисел, например: arr = [1,2,3,4,5].
Напишите функцию getSums(arr), которая возвращает массив его частичных сумм. */

let input = [1, 2, 3, 4, 5];
let output = []

let SumArr = input.reduce(function(sum, current, i, array) {
	output.push(sum);
	return current + sum
});

console.log(output);

