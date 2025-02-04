
// Question No 16:-

//Write a program to find the sum of all numbers in an array?

function sumOfAllArray(arr){
//  frist method to solve this question 
        // sum = 0;

        // for (let i = 0; i < arr.length; i++) {
        //     sum += arr[i]
        // }

        // return sum;

        //here is the second method to solve this problem through reduce function

        return arr.reduce( (acc , num) => {
                return acc + num;
        })
}

console.log(sumOfAllArray([10,19]));