   //throw keyword work with only try and catch throw user define error
        try
        {
            let json ='{"age":30}'//"{"name":name}"
            let user = JSON.parse(json);

            if(!user.name)
            {
                throw new Error  ("Incomplete Data : no name");
            }
            console.log(user.name);
            console.log(user.age);
        }
        catch(error)
        {
            console.log('error has occured'+error);
        }