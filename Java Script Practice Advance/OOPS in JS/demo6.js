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
        console.log("prototype method : Employee "+this.empname);
    }
}
class manager extends employee //extends keyword is used to inherit the properties of another class into a new
{
  
}
let a=new manager("hello");
a.info();
//if we do not call super it show erro and only call child class constructor

