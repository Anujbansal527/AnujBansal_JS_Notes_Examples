//object literals
let n="student";

var obj={
    [n]:"Demo Name",
    course0:"Mca"   
};
console.log(obj);
console.log(obj.name);

//other example
let n1="student";
var obj2={
    [n1 + "name"]:"Demo name 2",
    course1:"Mca2",
    detail:function()
    {
        return `${this.studentname} is student of ${this.course}`
    },
    //new way to create function inside object
    details()
    {
        return `${this.studentname} is student of ${this.course}`
    },
    //function with multiple names
    'detail show'()
    {
        return `${this.studentname} is student of ${this.course}`
    }

};
console.log(obj2);
console.log(obj2.detail());
//new way to call function
console.log(obj2['details']());
console.log(obj2['detail show']());

//other way to create function
let fname="firstname";
let lname="lastname";
let course="Mca";

function stu(fname,lname,course)
{
    let full=fname+""+lname;
    return {full,course};
}

let s=stu(fname,lname,course);
console.log(s.full);
console.log(s.course);




