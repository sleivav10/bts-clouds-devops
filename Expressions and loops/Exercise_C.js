function numberChecker(num) {
    if (num > 20) {   //check if the number is higher than 20
      return `${num} is greater than 20`;  //return is greater than 20
    } else if (num === 20) {   //check is the number is equal to 20
      return `${num} is equal to 20`; //return is equal to 20
    } else if (num < 20) {  //check is the number is less to 20
      return `${num} is less than 20`;
    } else {
      return `${num} isn't even a number :(`; //If any part above happened appear this msj
    }
  }

result=numberChecker(200)
console.log(result)

result_string=numberChecker("susana")
console.log(result_string)
//when you use a string the function answer: isn't even a number :(`