

const yearbirth= [1964, 2008, 1999, 2005, 1978, 1985, 1919 ]
yearbirth.forEach(function (year, index) {
    var fechaActual = new Date();
    var añoActual = fechaActual.getFullYear();
    const age1=añoActual -year
    if (age1>17){
        console.log(index + ": Born in "+year+" can drive")   
        }
    else {console.log(index+": Born in "+year+" can drive in "+(17-age1)+" years")}
  });
