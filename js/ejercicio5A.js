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

ESTA RESOLUCIÓN SIGUE LO VISTO EN LA CLASE DEL 12/7/22.

*/

do{

  let numero = parseInt(prompt('Ingrese un numero de DNI, entre (0 y 99999999'));
  console.log(numero);
  if( numero>0 && numero <= 99999999 ){
  
  let resultado = numero % 23;
  
  console.log(resultado);
  
  switch(resultado){
    case 0:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra T");
    break;
    case 1:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra R");
    break;
    case 2:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra W");
    break;
    case 3:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra A");
    break;
    case 4:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra G");
    break;
    case 5:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra M");
    break;
    case 6:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra Y");
    break;
    case 7:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra F");
    break;
    case 8:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra P");
    break;
    case 9:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra D");
    break;
    case 10:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra X");
    break;
    case 11:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra B");
    break;
    case 12:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra N");
    break;
    case 13:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra J");
    break;
    case 14:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra Z");
    break;
    case 15:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra S");
    break;
    case 16:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra Q");
    break;
    case 17:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra V");
    break;
    case 18:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra H");
    break;
    case 19:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra L");
    break;
    case 20:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra C");
    break;
    case 21:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra K");
    break;
    case 22:
    document.write("Al DNI ingresado " + numero +" le corresponde la letra E");
    break;
        default:
          alert('Ingresaste una opción errónea')
  
  }
  }else{
  
    alert('Ingresó un número erróneo')
  
  }
  }while((confirm('¿Desea ingresar otro DNI?')))
