//destructuring array0
let user =["namefirst",22,"indore",["male",25000]];

let [name,age=20,city,[gender,salary]] = user;

console.log(name);
console.log(age);
console.log(city);
console.log(gender); 
console.log(salary);

//destructuring object
let user1={
    name1:"name1",
    age1:34,
    city1:'mumbai'
};
 let {name1,age1,city1} = user1;
console.log(name1);
console.log(age1);
console.log(city1);