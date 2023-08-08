setTimeout(function(){
    try{
    blahblah;
    }
    catch(error)
    {
        console.log('error has occured'+error.name);
        console.log('error has occured'+error.message);
        console.log('error has occured'+error.stack);
    } 
},1000);

/*
diffrent type of errors in js
    *EvalError
    *RangeError
    *ReferenceError
    *SyntaxError
    *TypeError
    *URIError
    *AggregateError
*/