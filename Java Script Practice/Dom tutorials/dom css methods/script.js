//css manipulations

//using class ***************
var ele;
//getting css attributes
ele=document.querySelector("#header").style.border;
console.log(ele);

//setting style in css
var ele1;
document.querySelector("#header").style.backgroundColor="blue";
//use camle case for seprated words(background-color to backgroundColor)
ele1=document.querySelector("#header").style.border;
console.log(ele1);

//using classname *************
document.querySelector("#header").className="abc xyz"
//here we use mutliple classes ....but priority goes to last class
//return an string of class name
var ele2;

ele2=document.querySelector("#header").className;
console.log(ele2);

//using classlist
document.querySelector("#header").classList="abc xyz"
//return an array 

var ele3;
ele3=document.querySelector("#header").classList;
console.log(ele3);
