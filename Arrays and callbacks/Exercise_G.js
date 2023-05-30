
function filterage_drive(birthYears) {
    var currentYear = new Date().getFullYear();
    var drivingAge = 17;
    
    var canDriveYears = birthYears.filter(function(year) {
      return (currentYear - year) >= drivingAge;
    });
    
    console.log("These are the birth years of people who can drive: " + canDriveYears.join(", "));
    
    return canDriveYears;
  }

  const yearbirth= [1964, 2008, 1999, 2005, 2016, 1985, 1919 ]
  var drivingPeople = filterage_drive(yearbirth);
  console.log(drivingPeople);