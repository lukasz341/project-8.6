// scripts.js
var a=prompt ('Wprowadź a'),
	b=prompt ('Wprowadź b'),
	value;
	
value=(a * a) + (2 * a * b) - (b * b);
console.log('Wynik: '+value);
if (value > 0) {
	console.log('Wynik dodatni');
}
else if (value < 0){
	console.log('Wynik ujemny');
}
if (value == 0) {
	console.log('Wynik równy 0');
}
else if (value != 0) {
	console.log('Wynik różny od 0');
}