//give the age and return the year when he is born
function getyear(age) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear-age;
  }
  
  //console.log(getyear(37))
  
  function createGreeting(name, age) {
    const Year_Born = getyear(age);
    const message =
      "My Name is " + name + " and I was born in " + Year_Born ;
    return message;
  }

  console.log(createGreeting("Susana", "37"))

  
