// Массивы

/* Напишите код, который:

Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива */


let array = [];
let Out  = false;

while (!Out) {
	NewElement = prompt('Введите число');
    
    if (NewElement === "" || NewElement === null || isNaN(NewElement)) {
    	Out = true;
        function sum(arr) {
        	let Sum = 0;
        	for (let i = 0; i<arr.length; i++) {
            	Sum += +arr[i];
            }
            return Sum;
        }
        alert(sum(array));
    }
    else {
    	array.push(NewElement);
    }
    
}


/* Создайте функцию find(arr, value), которая ищет в массиве arr значение value 
и возвращает его номер, если найдено, или -1, если не найдено. */

let cities = ['Brugges', 'Prague', 'Florence'];

function find(arr, value) {
	let index = -1;
	for (let i = 0; i < arr.length; i++) {
    	if (arr[i] === value) {
        	index = i;
        }
    }
    return index;
}

alert(find(cities, 'Prague'));


/* Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr. */

let contries = ["England", "England", "England", "France", "Italy", "Italy"]

function unique(arr) {
	arr.sort();
	for (let i=0; i<arr.length; i++) {
    	if (arr[i] === arr[i+1]) {
        	arr.splice(i, 1);
            i -= 1;
        }
    }
    
    return arr;
}

UniqueContries = unique(contries);

console.log(UniqueContries);


/* Создайте функцию filterRangeInPlace(arr, a, b), 
которая получает массив с числами arr и удаляет из него все числа вне диапазона a..b. 
То есть, проверка имеет вид a ? arr[i] ? b. */

let array = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length; i++) {
    	if (arr[i] <= a || arr[i] >= b) {
        	arr.splice(i--, 1);
        }
    }
    return arr;
}

array = filterRangeInPlace(array, 1, 4);

console.log(array);