

    function checkNum(num){

            if(num > 0){
                return ("This is an Postive number");
            }else if (num < 0){
                return ("This is an Nagtive Number");
            }else{
                return ("This is Zero");
            }
    }

        console.log(checkNum(-5));
        console.log(checkNum(5));
        console.log(checkNum(0));