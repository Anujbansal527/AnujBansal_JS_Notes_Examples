//creating array using constructor method
var a = new Array(10,"20.20",30,"string");


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