//inheritance
class employee
{
    constructor(name)
    {
        console.log("Constructor: Employee"+name);
    }
}
class manager extends employee //extends keyword is used to inherit the properties of another class into a new
{

}
let a=new manager("hello");

