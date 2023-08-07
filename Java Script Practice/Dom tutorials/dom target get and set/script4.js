//setting attribute from targetting html dom

//innertext
var ele;
ele=document.getElementById("h1").innerText="setting inner text";
console.log(ele);


//innerhtml
var ele1;
ele1=document.getElementById("header").innerHTML="<h2>this is demo for innerhtml<h2/>";
console.log(ele1);

//setAttribute
var ele2;
ele2=document.getElementById("header").setAttribute("class","abc");
console.log(ele2);

//attributes
var ele3;
//ele3=document.getElementById("header").attributes[0].value="new-attri";
console.log(ele3);


//removeattribute
var ele4;
ele4=document.getElementById("h1").removeAttribute("class");
console.log(ele4);


/********************************************************************/
//new dom targetting methods
//queryselector
var ele5;
document.querySelector("#header").innerHTML="<h1>new dom method</h1>"
ele5=document.querySelector(".list");
console.log(ele5);

//queryselectorAll
var ele6;
document.querySelector("#header").innerHTML="<h1>new dom method</h1>"
ele6=document.querySelectorAll(".list")[1];
console.log(ele6);


///
var ele7
ele7=document.querySelectorAll(".list")[1].innerHTML;
console.log(ele7);