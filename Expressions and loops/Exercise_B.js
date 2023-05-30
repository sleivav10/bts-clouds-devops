//Pair up and correct the following function
// so that the output returns "You've given me a bool, thanks!"

function boolChecker(bool) {
    if (typeof bool === 'boolean') {  //Check if is boolean or not
      return "You've given me a bool, thanks!";
    }
    return "No bool, not cool."; //if in case is not boolean print this
  }
  
  let codeYour = true;
  result=boolChecker(codeYour);
  console.log(result)