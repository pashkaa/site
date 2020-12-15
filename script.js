var n = prompt('Введіть n: ', );
var m = prompt('Введіть m: ', );
document.write('<h1>Матриця ' + n + 'x' + m + '</h1>');

var elements = [];

for (var i = 0; i < n; i++) {
	elements[i] = [];
}

for (var i = 0; i < n; i++) {
	for (var j = 0; j < m; j++) {
		document.write('<input type="number" placeholder="Element [' + i + '][' + j + ']' + '" id="input' + i + j + '"'      + '>');
	}
	document.write('<br>');
}

function generate() {
	var product = 1;
	for (var i = 0; i < n; i++) {
	 	for (var j = 0; j < n; j++) {
			var el = document.getElementById('input' + i + j);
			elements[i][j] = el.value;
	 			if (i % 2 == 1 && j % 2 == 1 && elements[i][j] < 0) {
	 				product *= elements[i][j];
	 			}
	 	}
	}
	var p = document.getElementById('result');
  	p.innerHTML = "Добуток від’ємних елементів матриці з обома непарними індексами = " + product;
}