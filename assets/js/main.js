function calcularIMC(){
 	var altura = document.imcForm.altura.value;
 	var peso = document.imcForm.peso.value;

 	var imc = peso/ Math.pow(altura, 2); 
 	

 	if(imc<18.5){
 		alert("Su peso es demasiado bajo" + "<br>"+ "Su índice de masa corporal es: " + imc);
}
    else if(imc>=18.5 && imc<24.9){
        alert("Su peso es normal" + "<br>"+ "Su índice de masa corporal es: " + imc);
}
    else if(imc>=25 && imc<29.9) {
        alert("Usted tiene sobrepeso" + "<br>"+ "Su índice de masa corporal es: " + imc);
}
    else if(imc>=30 && imc <39.9) {
        alert("Usted tiene obesidad" + "<br>"+ "Su índice de masa corporal es: " + imc);
    else{
        alert("Usted tiene obesidad grave" + "<br>"+ "Su índice de masa corporal es: " + imc);
    }
}
     

 /*peso en kg, altura en cm*/


