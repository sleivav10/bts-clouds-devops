//Complete this function so that, if the second index
// in the array contains the name "Amy", it returns "Second index matched!"

function secondMatchesAmy(array) {
  if ( array[1]==='Amy') {
    return "Second index matched!";
   }
  return "Second index not matched";
}

array=["Mary","Amy","Robert"]
console.log(secondMatchesAmy(array))