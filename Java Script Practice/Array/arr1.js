//creating array
//type 1
var a=[10,20,30,40];
console.log(a);

//iterating array 
for (let i in a)
{
    console.log(a[i]);
} 

//other type
for (let i of a)
{
    console.log(i);
} 

//constant array

const arr=[10,20,30];
//cannot change the value once assigned to constant variable arr=[50,62,45]
console.log(arr);

arr[1]=420;
console.log(arr);
