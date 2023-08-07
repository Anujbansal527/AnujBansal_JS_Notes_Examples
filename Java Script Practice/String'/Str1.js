str="      this is a demo string to perform actions     ";

str2="demo str2";

str3=10000;

console.log("demo string for usinf \' single quotes \" double quotes \\ backslash ");

console.log("demo string of escape sequence using \b (for backspace) \f (for form feed) \n (to change line) \r (carriege return) \t (horizontal tabs) \v (vertical tabs)");

//string property
console.log("length of string",str.length);

//string methods

console.log("all char upper case",str.toUpperCase());

console.log("all char lower case",str.toLowerCase());

console.log("search word",str.includes("o"));
console.log("search word",str.includes("demo"));

console.log("check start with",str.startsWith("this"));
console.log("check start with",str.startsWith("demo"));

console.log("check ends with",str.startsWith("actions"));
console.log("check ends with",str.startsWith("demo"));

console.log("search",str.search("demo"));
console.log("search",str.search("5"));

console.log("match",str.match("demo"));
console.log("match",str.search("s"));

console.log("indexof",str.indexOf("demo"));
console.log("indexof",str.indexOf("s"));

console.log("lastindexof",str.lastIndexOf("to"));
console.log("lastindexof",str.lastIndexOf("s"));

console.log("replace",str.indexOf("demo","final"));
console.log("replace",str.indexOf("s","S"));

console.log("trim",str.trim());

console.log("Character at specific position is :",str.charAt(14));

console.log("Character at specific position is :",str.charCodeAt(14));

//console.log("Character at specific position is :",str.formCharCode(11));

console.log("joining two string",str.concat(str2));

console.log("Splitting string",str2.split("-"));

console.log("repeating string",str2.repeat(2));

console.log("Slicing string",str.slice(2,10));
console.log("Slicing string",str.slice(-10,-2));

console.log("Substr string",str.substr(3,20));

console.log("Substring string",str.substring(3,20));

console.log("toString string",str3.toString());

console.log("valueOf string",str3.valueOf());
//default 




