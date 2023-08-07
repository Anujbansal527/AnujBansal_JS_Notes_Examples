var a=0;
var id=setInterval(Anim,100);
//two prameter one for function and second for timeinterval
//1000 milimeter that means 1 second
function Anim()
{
    a=a+10;
    //clear interval
    if(a==200)
    {
        clearInterval(id);
    }
    else
    {      
        var target=document.getElementById("test");
        target.style.marginLeft = a+'px';
       // target.style.width = a+'px';

    }
    }