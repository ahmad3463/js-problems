
// question no 12:-

//Create a program to find the smallest number in an array?

        function findTheSmallestValue(arr){

            if(arr.length === 0){
                return "The is an empty array";
            }

            smallest = arr[0]

            for (let i = 0; i < arr.length; i++) {
                if(arr[i] < smallest){
                    smallest = arr[i];
                }
                
            }
            return smallest;
        }

        let numbers = [29,32,4,234,5,32,43,];

        console.log(findTheSmallestValue(numbers));