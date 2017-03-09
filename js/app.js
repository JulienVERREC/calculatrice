var a = 10
var b = 5

//addition

function addition(a, b) {
	return a + b;
}
console.log(a + b);

//soustraction

function soustraction(a, b){
	return a - b;
}
console.log(a - b);

//multiplication

function multiplication(a, b){
	return a * b;
}
console.log(a * b);

//division

function division(a, b){
	return a / b;
//si b>0 console.log resultat de la division a/b

	if (b > 0) {
		console.log(a / b);
	}
//si b=<0 console.log message erreur can't divide by 0

	else (b =< 0) {
		console.log("can't divide by 0");
	}
}
console.log(a / b);