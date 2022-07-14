/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

ESTA RESOLUCIÓN SIGUE LO VISTO EN LA CLASE DEL 12/7/22.
*/

// Definición de las variables
let filas = parseInt(prompt("ingrese un número de filas"));
let columnas = parseInt(prompt("Ingrese un número de columnas"));
let resultado = filas * columnas; 

document.write(`<table> <tbody>`);

//Dibujando la tabla

for (let indiceFila = 0; indiceFila < filas; indiceFila++){
  document.write(`<tr>`);
for (let indiceColumna = 0; indiceColumna < columnas; indiceColumna++) {
  document.write(`<td>${resultado}</td>`); resultado--;
}
document.write(`</tr>`);
}
document.write(`<table><tbody>`);