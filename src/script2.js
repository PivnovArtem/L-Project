// �������

/* �������� ���, �������:

����������� �� ������� �������� ��� ������ prompt � ��������� �� � �������.
����������� ����, ��� ������ ���������� ����� ������ ������, �� ����� ��� ����� �������.
��� ���� ���� 0 �� ������ ����������� ����, ��� ����������� �����.
������� ����� ���� �������� ������� */


let array = [];
let Out  = false;

while (!Out) {
	NewElement = prompt('������� �����');
    
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


/* �������� ������� find(arr, value), ������� ���� � ������� arr �������� value 
� ���������� ��� �����, ���� �������, ��� -1, ���� �� �������. */

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


/* ����� arr � ������ �����.
�������� ������� unique(arr), ������� ���������� ������, ���������� ������ ���������� �������� arr. */

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


/* �������� ������� filterRangeInPlace(arr, a, b), 
������� �������� ������ � ������� arr � ������� �� ���� ��� ����� ��� ��������� a..b. 
�� ����, �������� ����� ��� a ? arr[i] ? b. */

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