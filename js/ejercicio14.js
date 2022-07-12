/* 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo
– entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué
tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

*/
let texto = prompt("Ingrese el texto deseado: ")
const longitud = texto.length;
let caracter;
let i;

for (i = 0; i < longitud; i++) {
    caracter = texto.charAt(i);    
    if (i == longitud - 1) {
        document.write(caracter);
    }
    else {
        document.write(caracter + "-");
    }
}

/* Investigué de esta fuente: 
https://parzibyte.me/blog/2020/02/21/javascript-agregar-caracter-entre-cadenas/#:~:text=Debemos%20recorrer%20la%20cadena%20e,al%20final%20agregamos%20el%20relleno.

*/