//normal function
function demo()
{
    console.log("disp func");
}
demo();

//parametries function
function demo1(a,b)
{
    console.log(a+b);
}
demo1(10,20);

//normal function with return type
function demo3()
{
    return "return type without arguments"
}
console.log(demo3());

//parametries functions with return value
function demo4(a,b)
{
    return "return function with parameters";
}
s=demo4(10,20);
console.log(s);

//anonyomus function without parameter
a=function() {
    console.log("anonyomus function");
}
a();

//anonyomus function with parameter
a=function(a,b) {
    console.log(a+b);
}
a(10,20);

//anonyomus function with return without parameter
a=function() {
    return "anonyomus function with return without parameter";
}
console.log(a());

//anonyomus function with return with parameter
a=function(a,b) {
    return a+b;
}
console.log(a(10,20));




