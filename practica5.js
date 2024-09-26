// Solicitar al usuario ingresar un número
var numero = prompt("Ingrese un número:");

// Convertir el número ingresado a una cadena para poder acceder a sus dígitos individualmente
var numeroComoCadena = numero.toString();

// Inicializar la variable para almacenar la suma de los dígitos
var sumaDigitos = 0;

// Iterar sobre cada dígito del número
for (var i = 0; i < numeroComoCadena.length; i++) {
    // Convertir cada dígito de nuevo a número y sumarlo a la variable sumaDigitos
    sumaDigitos += parseInt(numeroComoCadena[i]);
}

// Mostrar la suma de los dígitos
document.write("La suma de los dígitos de " + numero + " es: " + sumaDigitos);


