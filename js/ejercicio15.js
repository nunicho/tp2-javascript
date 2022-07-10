/* 15 - Realiza un script que cuente el número de vocales que tiene un texto.

*/

let texto = prompt("Ingrese texto: ")

document.write("El texto ingresado fue :" + texto)

let textoMinuscula = texto.toLowerCase();

let textoNoConsonantes = textoMinuscula.replace(/[^aeiouáéíóú]/g, "")

document.write(" <br>Las vocales de este texto son: "+textoNoConsonantes +"<br>")   


let countTotal = textoNoConsonantes.split("").length;
document.write("Cantidad de vocales TOTAL: " + countTotal +"<br>");

let countA = (textoNoConsonantes.split("a").length -1)+(textoNoConsonantes.split("á").length -1);
document.write("Cantidad de vocales A: " + countA +"<br>");

let countE = (textoNoConsonantes.split("e").length  - 1)+(textoNoConsonantes.split("é").length  - 1);
document.write("Cantidad de vocales E: " + countE +"<br>");

let countI = (textoNoConsonantes.split("i").length  - 1)+(textoNoConsonantes.split("í").length  - 1);
document.write("Cantidad de vocales I: " + countI +"<br>");

let countO = (textoNoConsonantes.split("o").length  - 1)+(textoNoConsonantes.split("ó").length  - 1);
document.write("Cantidad de vocales O: " + countO +"<br>");

let countU = (textoNoConsonantes.split("u").length - 1)+(textoNoConsonantes.split("ú").length  - 1);
document.write("Cantidad de vocales U: " + countU +"<br>");



/*
A la mecánica replace la aprendí de:
https://bobbyhadz.com/blog/javascript-remove-special-characters-from-string

La mecánica es str.replace[^/g] 
Donde:
a) str: es mi variable texto, ingresada por el usuario mediante el prompt y convertida a minúsculas (toLowerCase) para reducir variabilidad.
b) replace: es la mecánica para reemplazar caracteres. 
c) Los [] indican todos los caracteres a tener en cuenta en la función replace.
d) El símbolo ^ indica que los siguientes caracteres no sean reemplazados. En mi caso, las vocales con y sin acentos. Por contraposición, todos los demás se reemplazan por " ".
e) La legra g indica que reemplace todas las coincidencias dentro de la string. 

Finalmente, usé length, una de las funciones indicadas por el enunciado, para contar cada una de las letras. 
La función split la usé para separar el carácter a contar y length para contar dicho caracter. Investigando encontré que debía agregar -1 al final de la función, caso contrario no funciona. 

*/