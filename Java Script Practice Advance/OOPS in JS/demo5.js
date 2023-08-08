//inheritance multiple constructor
class employee
{
    constructor(name)
    {
        console.log("Constructor: Employee "+name);
    }
}
class manager extends employee //extends keyword is used to inherit the properties of another class into a new
{
    constructor(name)
    {
        super();
        console.log("Constructor: manager "+name);
    }
}
let a=new manager("hello");
//if we do not call super it show erro and only call child class constructor

