
        const promises = new Promise( (resolve , reject) => {

            setTimeout(function(){
                console.log("Asyn task is complete");
            },1000)
        })

        Promises.then(function (){
            console.log("task consumed");
        })