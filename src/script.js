"use strict"

// Сумма чисел
function sum(FirstNumber) {
	return function(SecondNumber){
		return FirstNumber + SecondNumber;
	}
}

var Sum = sum;
console.log('Сумма:', Sum(1)(3));

//Полное имя
function fullName(FirstName) {
	return function(LastName){
		return FirstName + ' ' + LastName;
	}
}

var FullName = fullName;
console.log('Полное имя: ', FullName('Иван')('Петров'));


// Буффер
function makeBufferOld() {
	var buff = '';
	return function(value) {
		return !value ? buff : buff += value;
	}
}

var BufferOld = makeBufferOld();

BufferOld('Старый ');
BufferOld('буфер');
BufferOld(' cоздан');

console.log(BufferOld());


// Буффер с очисткой

function makeBufferNew() {
	var buff = '';

	function buffers(value) {
		return !value ? buff : buff += value;
	}

	buffers.clear = function() {
		buff = '';
	}

	return buffers
}

var BufferNew = makeBufferNew();

BufferNew('Буфер');
BufferNew(' cоздан');
BufferNew.clear();
BufferNew('Новый ');
BufferNew('буфер');
BufferNew(' обновлен');

console.log(BufferNew());