import { message,user,test } from "./mod2.js"

// we can use alias name 
//import { message as msg,user as us,test as te} from "./mod2.js";

//we can import all module at once
//import * from "./mod2.js";  

//using alias name
//import * as obj from "./mod2.js";  


console.log(message);

user("ram");

let a = new test();