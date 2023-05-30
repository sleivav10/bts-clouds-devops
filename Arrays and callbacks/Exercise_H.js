
function findName(namesArray, myName) 
{

    var foundName = namesArray.find(
        function(name) {
      return name === myName;
    });
  
    if (foundName) {
      return "Found me!";
    } else {
      return "Haven't found me :(";
    }
 }
  
  // Example usage
  var names =  [ "James", "Elamin","Ismael","Sanyia","Chris","Antigoni"]
  var myName = "Elamin";
  var result = findName(names, myName);
  console.log(result);