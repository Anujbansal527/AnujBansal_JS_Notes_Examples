//for loop

for(let a=0;a<=5;a++)
{
    console.log(a);
}

//for inside for
string="";
for(let b=0;b<=5;b++)
{
        for(let a=0;a<=5;a++)
        {
            string += a;
        }
        string += "\n";
}
console.log(string);

//while loop
let i=0;
while(i<5)
{
    console.log(i);
    i++;
}

//while inside while
let j=0;
while (j < 10) {
  while (j < 5) {
    j++;
  }
  j++;
  console.log(j);
}

//do while
var count = 0;
do {
  console.log(count);
  count++;
} while (count < 5);