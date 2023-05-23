function sum_array(arr) {
    let sum=0;
    arr.forEach((element) => {
     console.log(element);
     sum+=element;
    });
}
const arr=[1,2,3];
const result =sum_array(arr);
console.log(result);