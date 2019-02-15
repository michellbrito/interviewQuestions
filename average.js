// Write a function that takes in an array of numbers
// and outputs the average of all the numbers.

let average = function (numArray){
    // keeps track of the sum 
    let sum = 0;
    
    // loops through array
    for (let i = 0; i < numArray.length; i++){
        // adds the numbers in the array to sum
        sum = sum + numArray[i];
    }
    // calculates the average by doing sum / numbers of array
    console.log(sum / numArray.length);
};

average([1,4,7]); // should console.log 4 
average([10,5]); // should console.log 7.5
average([1.5,3,2.5,1]); // should console.log 2

