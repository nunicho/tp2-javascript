/* 12- Realiza un script que genere un número aleatorio entre 1 y 99

*/

let aleatorio = Math.round(Math.random()*100);

alert("Número aleatorio entre 0 y 99: " +aleatorio);


/*
a)La función Math.random() devuelve un número de coma flotante pseudo-aleatorio, comprendido en el rango de 0 a menor que 1 (es decir, incluido el 0 pero no el 1), con una distribución aproximadamente uniforme en este rango. Dicho rango puede ser ampliado hasta los valores deseados. La implementación selecciona la semilla inicial del algoritmo de generación de números aleatorios, no pudiendo ser esta elegida o restablecida por el usuario.
b) Se multiplica por 100 para que el número esté comprendido entre 0 y 100.
c) Se utiliza Math.round para que retorne el valor de un número redondeado al entero más cercano.


https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/round
*/