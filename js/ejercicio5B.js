/* 5- Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R,
W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

ESTA ES LA RESOLUCIÓN QUE HICE ANTES DE LA EXPLICACIÓN EN CLASE DEL 12/7/22.
*/

while (confirm("Click Aceptar para ingresar su DNI") == true) {
  let numero = parseInt(prompt("Ingrese su número de DNI: "));
  if (numero >= 0 && numero <= 99999999) {
    if (numero % 23 == 0) alert("Le corresponde la letra T");
    if (numero % 23 == 1) alert("Le corresponde la letra R");
    if (numero % 23 == 2) alert("Le corresponde la letra W");
    if (numero % 23 == 3) alert("Le corresponde la letra A");
    if (numero % 23 == 4) alert("Le corresponde la letra G");
    if (numero % 23 == 5) alert("Le corresponde la letra M");
    if (numero % 23 == 6) alert("Le corresponde la letra Y");
    if (numero % 23 == 7) alert("Le corresponde la letra F");
    if (numero % 23 == 8) alert("Le corresponde la letra P");
    if (numero % 23 == 9) alert("Le corresponde la letra D");
    if (numero % 23 == 10) alert("Le corresponde la letra X");
    if (numero % 23 == 11) alert("Le corresponde la letra B");
    if (numero % 23 == 12) alert("Le corresponde la letra N");
    if (numero % 23 == 13) alert("Le corresponde la letra J");
    if (numero % 23 == 14) alert("Le corresponde la letra Z");
    if (numero % 23 == 15) alert("Le corresponde la letra S");
    if (numero % 23 == 16) alert("Le corresponde la letra Q");
    if (numero % 23 == 17) alert("Le corresponde la letra V");
    if (numero % 23 == 18) alert("Le corresponde la letra H");
    if (numero % 23 == 19) alert("Le corresponde la letra L");
    if (numero % 23 == 20) alert("Le corresponde la letra C");
    if (numero % 23 == 21) alert("Le corresponde la letra K");
    if (numero % 23 == 22) alert("Le corresponde la letra E");
  }else {
    alert("El texto ingresado no es un número de DNI válido");
  }
}
