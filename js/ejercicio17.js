/* 17- Realiza un script que muestre la posición de la primera vocal de un texto
introducido por teclado.

*/

//Primero se arma un array con las vocales. 
let vocales = ["a","e","i","o","u","á","é","í","ó","ú"];
let texto = prompt("Introduce el texto deseado:").toLowerCase();

//Se declara una variable donde se guardará la posición de la vocal. 
let posicion = 0;
//Se declara una bandera y se inicializa en false. 
let parar = false;

//este es el bucle que recorre el texto ingresado. 
for (let i = 0; i < texto.length; i++){
    // este es el bucle que recorre el array de las vocales.
    for (let j = 0; j < vocales.length; j++) {
        //Si la vocal i está en el array de las vocales.
        if (vocales[j] == texto.charAt(i)) {
            //se guarda la posición. 
            posicion = i;
            parar=true;
            //se corta la ejecución del bucle que recorre el array.
            break;
}
}
//se corta la ejecución del bucle que recorre el texto.
if (parar){
    break;
}    
}
document.write("La primera vocal está ubicada en la posición: " +posicion)