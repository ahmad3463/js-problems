

function findTheLargestNum(arr){

        if(arr.length === 0){
            return "this is an empty array";
        }

        let largest = arr[0];

        for(let i = 0; i<=arr.length;i++){
            if(arr[i] > largest){
                largest = arr[i];
            }
        }
        return largest;
}

    const numbers = ['23','43','54','65','35'];
    const largestNum = findTheLargestNum(numbers);

    console.log("The largest num is",largestNum);