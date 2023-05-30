function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

for (let i = 5; i < 21; i++) 
{
  if(isEven(i)===true)
  {
  answer=exponential(i)
  console.log("The exponential of "+i+ " is: "+answer );
  }
  //else {return("Is not par") }
}




