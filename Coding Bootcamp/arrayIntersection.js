// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

function arrayIntersection(arr1, arr2) {
    let duplicate = [];
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if (arr1[i] == arr2[j]){
                duplicate.push(arr1[i]);
            }
        }
    }

    return duplicate;
};
