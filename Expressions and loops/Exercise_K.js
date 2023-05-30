//Write a function which takes your students array as an input. In the function, use a for loop to iterate over the array
// and print the name of each student to the console.
 
function NameStudent(array)
{
  for (let i = 0; i < array.length; i++) {
    const name_stud = i+"- "+ array[i];
    console.log(name_stud);
  }
}
  const students = [
    "Mary",
    "Claudia",
    "Carla",
    "Veronica",
    "Nicole",
    "Victoria",
    "Daniela",
  ];
  result=NameStudent(students)
  //console.log(result) 