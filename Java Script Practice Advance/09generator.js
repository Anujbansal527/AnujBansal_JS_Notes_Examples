function generator()
{
    yield "yield 1";
    yield "yield 2";
    yield "yield 3";
}
let g = generator();
/*
for(let value of g)
{
    console.log(g.next().value);
}

*/

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
