class student
{
    constructor(name)
    {
        //constructor method
        this.studentname=name;
        console.log("Constructor Function");
    }
    hello()
    {
        //prototype method
        console.log("hello "+this.studentname);
    }
    static staticmeth()
    {
        //static methoda
        console.log("static Function");
    }
}

let a = new student("demoname");
a.hello();
student.staticmeth();
//constructor will automatically called
//protype method is called by using object
//static method is called by using classname

let b = new student("demoname2");
b.hello();