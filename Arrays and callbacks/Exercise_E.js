//Create a function that takes a birthYear, and returns the age of someone
//You are given an array with year that 7 people were born,
// 
//Take this array and create another array containing their ages.
//console.log the birth years array

const yearbirth=[1964, 2008, 1999, 2005, 1978, 1985, 1919]
yearbirth.forEach(function (age, index) {
    var fechaActual = new Date();
    var añoActual = fechaActual.getFullYear();
    const age1=añoActual  -age
    console.log(index + ": " + age1);
  });
