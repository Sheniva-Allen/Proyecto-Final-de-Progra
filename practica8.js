//  ingresar un número N
var N = parseInt(prompt("Ingrese un número N:"));

// Inicializar la variable para almacenar la suma
var suma = 0;

// Calcular la suma de los primeros N números naturales
for (var i = 1; i <= N; i++) {
    suma += i;
}

// Mostrar la suma de los primeros N números naturales
document.write("La suma de los primeros " + N + " números naturales es: " + suma);