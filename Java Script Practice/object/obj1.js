//creating object

var a=
{
    fname:"Name",
    age:20,
    favMovie:["abc","xyz","lmn"],
    salary:function()
    {
        return 20000;
    },
    add:function(a,b)
    {
        return a+b;
    },
    obj:
    {
        name:"new namw",
        age:23
    }
}

console.log(a.fname);
console.log(a.age);
console.log(a.favMovie[2]);
console.log(a.salary());
console.log(a.add(10,20));
console.log(a.obj.name);

//creating object using constructor

var b=new Object();

//filling data on object

b.fname="new name";
b.lname="last name";
b.age=20;

console.log(b);

//array of object
var stu=
[
    {name:"ram",age:20},
    {name:"shyam",age:24},
    {name:"radha",age:23}
];

//trevesing using loop
let x;
for(x=0;x<stu.length;x++)
{
    console.log(stu[x]);
    console.log(stu[x].name);
}
