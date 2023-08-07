//getting attribute from targetting html dom

//innertext
var ele;
ele=document.getElementById("h1").innerText;
console.log(ele);


//innerhtml
var ele1;
ele1=document.getElementById("header").innerHTML;
console.log(ele1);

//getAttribute
var ele2;
ele2=document.getElementById("header").getAttribute("class");
console.log(ele2);


//innerhtml
var ele3;
ele3=document.getElementById("header").getAttributeNode("class");
console.log(ele3);

//attributes
var ele4;
ele4=document.getElementById("header").attributes;
console.log(ele4);

//specific attribute target(collection of attribute)
var ele5;
ele5=document.getElementById("header").attributes[1];
console.log(ele5);
  
//specific attribute target(collection of attribute) with value
var ele6;
ele6=document.getElementById("header").attributes[1].value;
console.log(ele6);

//specific attribute target(collection of attribute) with name
var ele7;
ele7=document.getElementById("header").attributes[1].name;
console.log(ele7);