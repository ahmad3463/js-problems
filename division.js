// Question No 13:-

//Write a function to check if a number is divisible by 3 or 5?


function isDivided(num){

    // return num % 3 === 0 || num % 5 === 0;
    if(num % 3 === 0){
        return "The Number you enter is dividing into 3";
    }else if(num % 5 === 0){
        return "The Number you enter is dividing into 5";
    }else{
        return "entring wrong number";
    }
}

console.log(isDivided(12)); 
console.log(isDivided(10)); 
console.log(isDivided(11)); 