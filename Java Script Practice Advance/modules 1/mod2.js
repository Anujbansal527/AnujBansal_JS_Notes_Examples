//we may export all or some modules

//exporting variables
export let message = "ES6 Modules";

//exporting Functions 
export function user(name)
{
    console.log(`hello ${name}`);
}

//exporting Class
export class test{
    constructor(){
        console.log("Constructor Method");
    }
} 

//exporting all thing in one line
//export {message,user,test};