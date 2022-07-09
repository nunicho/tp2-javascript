/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

*/
let numero = 0;

while (confirm("Click Aceptar para ingresar un numero") == true){
    let cifra= parseInt(prompt("Ingrese un número: "))
    if (isNaN(cifra) === false){
        numero += cifra
    }
     else if (isNaN(cifra) === true){
        alert("Lo ingresado no es un número")
    }
}
document.write("Suma total de los números introducidos: "+numero)


/*
isNaN : usé esta función porque su mecánica es que intenta convertir el parámetro pasado a un número. Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/isNaN

La función isNaN() comprueba si una cadena dada es un número o no en JavaScript. La función isNaN() determina si el valor dado es un número o un número ilegal (Not-a-Number). La función genera como Verdadero para un valor NaN y devuelve Falso para un valor numérico válido.
(DelfStack)

Por lo tanto, tomo una cifra que proviene de un prompt (con parseInt) y la paso por la función isNaN :
a) Si el resultado es false: entonces quiere decir que es una cifra numérica,  y se acumula en la variable numero.
b) Por el contrario, si es true: entonces quiere decir que no es una cifra numérica, no se puede convertir a número, lo que deriva en que se ejecute el alert. 

*/