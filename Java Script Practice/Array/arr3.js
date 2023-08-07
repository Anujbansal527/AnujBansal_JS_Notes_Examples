//2d or multidimentional array
var a = [
    [10,20,30,40,50],
    ["10","20","30","40","50"],
    [10.5,20,30,50,60]
];

//printing 2d array
for(let i=0 ;i<a.length;i++)
{
    for ( let j=0;j < a[i].length;j++ )
    {
        console.log(a[i][j]);
    }
}