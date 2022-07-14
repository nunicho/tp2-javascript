/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

ESTA ES LA RESOLUCIÓN QUE HICE ANTES DE LA EXPLICACIÓN EN CLASE DEL 12/7/22.
*/

let fila =parseInt(prompt("Inserte el número de filas deseado: "))
let columna =parseInt(prompt("Inserte el número de columnas deseado: "))
let numeroCelda = fila*columna;

const createTable = (row, col) => {
    let body = document.body;
    let tbl = document.createElement("table");
  
    for (let i = 0; i < row; i++) {
        let tr = tbl.insertRow();
      for (let j = 0; j < col; j++) {
        let td = tr.insertCell();
        td.appendChild(document.createTextNode(numeroCelda--));
        td.style.border = "1px solid black";
      }
    }
    body.appendChild(tbl);
  };

  createTable(fila, columna);


/*
  Investigué en 
  https://stackoverflow.com/questions/14643617/create-table-using-javascript
*/