
// Question not 11:-

//Write a function to return the factorial of a given number?


function factorial(n) {

    result = 1;

    for (let i = n; i > 1; i--) {
        result *= i;

    }
    return result;
}

console.log(factorial(5));