var peso = prompt("Ingresa tu peso en kilos");
var altura = (prompt("Ingresa tu estatura en centímetros") / 100);

function imc(peso, altura) {
    return (peso / (Math.pow(altura, 2))).toFixed(2);
}
//Segín el IMC un alert informará si está en el peso normal, sobrepeso o bajopeso e indicará cuantos kilos debe subir o bajar para estar saludable.
if (imc(peso, altura) <= 20.5) {
    alert("Tu IMC es: " + imc(peso, altura) + "\nEstá BAJO lo normal, debes subir de peso:\n" + (Math.pow(altura, 2) * 20.5 - peso).toFixed(1) + " kilos" + "\nConsulta con tu médico.");
} else if (imc(peso, altura) >= 25.5) {
    alert("Tu IMC es: " + imc(peso, altura) + "\nEstá SOBRE lo normal, debes bajar de peso:\n" + (peso - Math.pow(altura, 2) * 20.5).toFixed(1) + " kilos" + "\nConsulta con tu médico.");
} else if (20.5 < imc(peso, altura) < 25.5) {
    alert("Tu IMC es " + imc(peso, altura) + "\nEstá en el rango normal\nSigue así!")
}


document.write("Tu IMC es: " + imc(peso, altura));