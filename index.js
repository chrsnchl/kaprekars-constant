function calculate() {
	var input = document.getElementById('number').value;

	if(isValid(input)) {
		clearBoard();
		kaprekar(input);
	}
	else {
		writeBoard('Please enter a 4 digit integer greater than 0, with varied digits');
	}
}

function isValid(num) {
	return (num > 0 && num % 1111 && num < 9999)
}

function writeBoard(message) {
	var chalkboard = document.getElementById('chalkboard');

	chalkboard.innerHTML += message+'<br>';
}
function clearBoard() {
	var chalkboard = document.getElementById('chalkboard');
	chalkboard.innerHTML = '';
}

function kaprekar(input) {
    input = fourDigit(input);

		var firstNumber = sortDigits(input);
		var secondNumber = 	sortDigits(input, 'ascending');
		var answer = firstNumber - secondNumber;

		writeBoard(firstNumber+'-'+secondNumber+'='+answer);


	if( input != 6174) {
		kaprekar(answer);
	}
}
function fourDigit(input) {
	formatted = String('0000' + input).slice(-4);
	return formatted;
}
function sortDigits(number, order) {
	if(order == 'ascending') {
		number = number.split('').sort().join('');
	}
	else
	{
		number = number.split('').sort().reverse().join('');
	}
	return number;
}
