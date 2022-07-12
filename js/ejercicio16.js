/* 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,
si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

*/

let texto = prompt(" Ingrese el texto a invertir: ")
let nuevaCadena= "";

for (let x = texto.length - 1; x >= 0; x--) {
    nuevaCadena += texto[x];
}
document.write(nuevaCadena)



/* Investigué en:
https://parzibyte.me/blog/2018/11/18/invertir-cadena-palabra-javascript/
*/