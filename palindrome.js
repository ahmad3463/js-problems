function isPalindrome(str){

        str = str.toLowerCase().replace(/[^a-z0-9]/g, '' );

        let reverseStr = str.split('').reverse().join('');

        return str === reverseStr;

}

console.log(isPalindrome('madam'));