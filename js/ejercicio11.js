/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

*/
let nombre1 = prompt("Ingrese el nombre de la persona 1: ");
let edad1 = parseInt(prompt("Ingrese edad de la persona 1: "));
let nombre2 = prompt("Ingrese el nombre de la persona 2: ");
let edad2 = parseInt(prompt("Ingrese edad de la persona 2: "));
let nombre3 = prompt("Ingrese el nombre de la persona 3: ");
let edad3 = parseInt(prompt("Ingrese edad de la persona 3: "));

let edadMayor = Math.max( edad1, edad2, edad3);

if (edad1==edadMayor && edad2==edadMayor && edadMayor>edad3){
    document.write(nombre1 +" y " +nombre2 +" tienen "+edadMayor+" y son los mayores. <br>")
}
else if (edad2==edadMayor && edad3==edadMayor && edadMayor>edad1){
    document.write(nombre2 +" y " +nombre3 +" tienen "+edadMayor+" y son los mayores. <br>")
}

else if (edad1==edadMayor && edad3==edadMayor && edadMayor>edad2){
    document.write(nombre1 +" y " +nombre3 +" tienen "+edadMayor+" y son los mayores. <br>")
}

else if (edad1==edadMayor && edadMayor>edad2 && edadMayor>edad3){
    document.write("La persona de nombre "+nombre1+" tiene "+edad1+" y es la de edad mayor. <br>" )
}
else if (edad2==edadMayor && edadMayor>edad1 && edadMayor>edad3){
    document.write("La persona de nombre "+nombre2+" tiene "+edad2+" y es la de edad mayor. <br>" )
}
else if (edad3==edadMayor && edadMayor>edad1 && edadMayor>edad2){
    document.write("La persona de nombre "+nombre3+" tiene "+edad3+" y es la de edad mayor. <br>" )
}
else{
    document.write(nombre1+", "+nombre2 +" y "+nombre3 +" tienen la misma edad.")
}