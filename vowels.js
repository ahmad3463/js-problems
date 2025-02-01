// Question No 10;
// Write a function to count the vowels in a string in js


function countVowels(str){

    const vowels = "aeiouAEIOU";

    let count = 0;
    
    for (const char of str) {
        
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}

const inputString = "here is a student of 6 semester";

console.log(`The Number of vowels is : ${countVowels(inputString)}`)