/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número
 que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

for (let numero = parseInt(prompt("Ingrese un número: ")); numero>0; numero--){
    for (let cifra = numero; cifra>0; cifra--){
        document.write(numero);
    }
document.write("<br>")
}


/*
Se necesitan dos ciclos, uno que sería la condición del primer ciclo y dentro de otro ciclo donde tome ese número actual como condición para imprimirse. Luego viene el salto de línea. 
*/