/* 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
           
1
22
333
4444
55555
666666
........

*/

for (let numero = 1; numero<=30; numero++){
  for (let cifra = 0 ; cifra<numero; cifra++){
      document.write(numero);
  }
document.write("<br>")
}

