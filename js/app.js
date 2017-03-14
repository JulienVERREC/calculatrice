
  $("#activer").click(function affichage(){
  var numero1 = prompt ("donner le premier chiffre");
  var operation  = prompt ("opération à effectuer");
  var numero2 = prompt ("donner le second chiffre");

  numero1 = parseInt (numero1);
  numero2 = parseInt (numero2);



  switch (operation){

    case '+':
       resultat = numero1 + numero2;
       break;

    case '-':
       resultat = numero1 - numero2;
       break;

    case '*':
       resultat = numero1 * numero2;
       break;

    case '/':
       resultat = numero1 / numero2;
       break;
   }

   alert(resultat);

    
  });
    









/*
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
*/
