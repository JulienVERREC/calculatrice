//addition

function addition(a, b) {
	console.log(a + b);
	return a + b;
}
//soustraction

function soustraction(a, b){
	console.log(a - b);
	return a - b;
}
//multiplication

function multiplication(a, b){
	console.log(a * b);
	return a * b;
}
//division

function division(a, b){
	
	if (b > 0){ 
	console.log(a / b);
	}
    
	else { 
	console.log("can't divide by 0");
	return a / b;
	}
}
//test addition
        addition(5, 9)
//test soustraction
		soustraction(8, 3)
//test multiplication
        multiplication(3, 9)
//test division
        division(45, 5)
//test division par 0
        division(6, 0)        