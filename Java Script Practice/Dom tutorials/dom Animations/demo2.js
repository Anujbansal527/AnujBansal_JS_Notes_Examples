//after an timeinetral function will run at only one time
var id=setTimeout(Anim,3000);
/*
**decleare function inside setTimeout() function
//we can call function using eventlisteners

var id= setTimeout(function()
{
    var target=document.getElementById("test");
    target.style.width="500px";
},5000);

*/

function Anim()
{
    var target = document.getElementById("test");
    target.style.width ="500px";
}

function StopAnim()
{
    clearTimeout(id);
}