/* 8- Crea script para generar pirámide siguiente con los números del 1 al número
que indique el usuario (no mayor de 50):
           
1
12
123
1234
12345
123456
........

*/

let numero = parseInt(prompt("Ingrese un número mayor a 0: "))

if (numero > 0){

let tope = 0
if (numero>50){
  tope = 50;
}
else{
  tope = numero;
}

for (let repeticiones = 0 ; repeticiones<=tope; repeticiones++){
  for (let impresiones = 1; impresiones<=repeticiones; impresiones++){
      document.write(impresiones);
  }
document.write("<br>")
}
}
else{
  alert("Lo ingresado no es válido")
}


/*
isNaN : usé esta función porque su mecánica es que intenta convertir el parámetro pasado a un número. Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/isNaN

La función isNaN() comprueba si una cadena dada es un número o no en JavaScript. La función isNaN() determina si el valor dado es un número o un número ilegal (Not-a-Number). La función genera como Verdadero para un valor NaN y devuelve Falso para un valor numérico válido.
(DelfStack)

Por lo tanto, tomo una cifra que proviene de un prompt (con parseInt) y la paso por la función isNaN :
a) Si el resultado es false: entonces quiere decir que es una cifra numérica,  y se acumula en la variable numero.
b) Por el contrario, si es true: entonces quiere decir que no es una cifra numérica, no se puede convertir a número, lo que deriva en que se ejecute el alert. 

*/
