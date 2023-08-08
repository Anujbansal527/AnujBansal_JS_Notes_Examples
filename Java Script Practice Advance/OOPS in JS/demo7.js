//inheritance with prototype method
class employee
{
    constructor(name)
    {
        this.empname=name;
        console.log("Constructor: Employee ");
    }
    info()
    {
        console.log("method: Employee "+this.empname);
    }
}
class manager extends employee //extends keyword is used to inherit the properties of another class into a new
{
    info()
    {
        super.info();
        console.log("method: manager "+this.empname);
    }
}
let a=new manager("hello");
a.info();
//to call parent class method also we use super keyword

