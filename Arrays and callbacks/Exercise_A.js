

function arraynames(array){
    for (var i = 0; i < array.length; i++) {
    var elemento = array[i];
    // Realiza alguna operación con el elemento
    console.log(elemento);
    }
}
  table=["Roque", "Ghandi","Georgina","Erick","Vicky"]
  console.log(arraynames(table))
  console.log("The long of the array is: "+table.length)
  // add a new name in the begining of the array
  table.unshift("Abby");
  console.log(table)
  // add a new name in the end of the array
  table.push("Anastasia");
  console.log(table)