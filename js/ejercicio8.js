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

if (numero>0 && numero <=50){

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

