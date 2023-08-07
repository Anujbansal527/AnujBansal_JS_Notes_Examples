//array methods
ar=[10,20,30,40,50,60,70,80,90,10,20];
abr=["40","50","60","70"];
arr=[[1,2,3,4],[5,6,7,8],[9,0,2,3]];


///////////////////
a=ar.at(2)
console.log(a);

///////////////////////
b=ar.concat(abr)
console.log();

///////////////////
c=ar.constructor;
console.log(c);

/////////////////////////
d=ar.copyWithin(2,0,3)
console.log(d);

//////////////////////////////
e=ar.entries();
for (let x of e) {
    console.log(x);
}

///////////////////////////
f=ar.every(checkAge);
console.log(f);
function checkAge(age) {
  return age > 18;
}

/////////////////
g=ar.fill("demo",3,7);
console.log(g);

/////////////////
const j = ar.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
console.log(j);

///////////////////
/*const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAge);
}*/

//////////////
h=ar.findIndex(checkAge);
console.log(d);
function checkAge(age) {
  return age > 18;
}

///////////////
console.log(arr.flat(2));

//////////////
i=ar.flatMap((x) => x * 2);
console.log(i);

/////////////
/*
const numbers = [65, 44, 12, 4];
console.log(numbers.forEach(myFunction));
function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
*/

/////////////////