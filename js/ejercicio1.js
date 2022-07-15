/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

let edad = parseInt(prompt("Ingresar edad: "));

if(edad >=18 && edad<=70){
    document.write("Usted ya puede solicitar licencia para conducir.");
}
else if(edad>70 && edad<=130){
    document.write("Usted ya puede solicitar licencia para conducir. Las personas de más de 70 años deben renovar su licencia cada año y rendir nuevos exámenes. ");
}
else if (edad<18 && edad>=0) {
    document.write("No tiene edad legal para solicitar la licencia.")
}
else{
    document.write ("El texto ingresado no es una edad válida.")
}