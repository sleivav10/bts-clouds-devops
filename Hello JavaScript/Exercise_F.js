//Using the variables provided in the exercise calculate the percentage
// of mentors and students in the group (percentages must 
//be a rounded to the nearest integer)
let numbersofstudent=15
let numbersofmentors=8
let sumNumbers=numbersofstudent+numbersofmentors

let percentage_student=Math.round((numbersofstudent/sumNumbers)*100)
let percentage_mentors=Math.round((numbersofmentors/sumNumbers)*100)

console.log('Percentage of Students: '+percentage_student+'%')
console.log('Percentage of Mentors: '+percentage_mentors+'%')

//Using online documentation,
// what other things can you do with the Math library? 
let x=43.5 
Abs=Math.abs(x)  //: Returns the absolute value of x.
Math.sqrt(x) //: Returns the square root of x.
flo=Math.floor(x) //: Returns the largest integer less than or equal to x.
Math.ceil(x) //: Returns the smallest integer greater than or equal to x.
console.log('Returns the largest integer less than or equal to x '+x+' is:'+ flo)