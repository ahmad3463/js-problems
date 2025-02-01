// Question no 8;

//Write a program to generate a random number between two given numbers.

function twoRandom(min , max){

    const num1 = Math.floor(Math.random() * (min - max + 1)) + min;
    // const num2 = Math.floor(Math.random(b));
    
        if(min <= max ){
            return num1;
         }else{
            return "there is error in your code. Please check";
         }

    
}

console.log(twoRandom(1,5));