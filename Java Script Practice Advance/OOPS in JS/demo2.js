class student
{
    constructor()
    {
        let name;
        console.log("Constructor Function");
    }
    hello()
    {
        console.log("hello "+this.name);
    }
}

let a = new student();
a.name ="demo name";
a.hello();