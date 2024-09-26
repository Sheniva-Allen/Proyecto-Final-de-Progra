// Solicitar al usuario ingresar un número
var numero = parseInt(prompt("Ingrese un número para generar su tabla de multiplicar:"));

// Mostrar la tabla de multiplicar del número ingresado
document.write("Tabla de multiplicar del ", numero);
for (var num1 = 1; num1 <= 10; num1++) {
    var resultado = numero * num1;
    document.write(numero + " x " + num1 + " = " + resultado);
}