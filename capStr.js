// Question No :-


//Create a function to capitalize the first letter of a string?


function capStr(str){
        if(!str){
            return "";
        }

        return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capStr('my name is'));