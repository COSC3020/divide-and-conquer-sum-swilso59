function divConqSum(arr) {
    // Base case: If the array has only one element, return that element.
    if (arr.length === 0){
        return 0;
    }
    if (arr.length === 1) {
        return arr[0];
    }

    // Split the array into three roughly equal sub-arrays.
    const n = arr.length;
    var mid = Math.round(n / 3);
    var mid2 = mid *2;   

    return divConqSum(arr.slice(0,mid)) + divConqSum(arr.slice(mid,mid2)) + divConqSum(arr.slice(mid2));
}

// Test case 1: Array with positive integers
const arr1 = [1, 2, 3, 4, 5];
const sum1 = divConqSum(arr1);
console.log("Test case 1 result:", sum1); // Expected output: 15

// Test case 2: Array with negative integers
const arr2 = [-1, -2, -3, -4, -5];
const sum2 = divConqSum(arr2);
console.log("Test case 2 result:", sum2); // Expected output: -15

// Test case 3: Array with a mix of positive and negative integers
const arr3 = [1, -2, 3, -4, 5];
const sum3 = divConqSum(arr3);
console.log("Test case 3 result:", sum3); // Expected output: 3

// Got help from the TA unsure why the test were failing but it seems to work now. Maybe because I was using Math.floor and switched it to Math.round??
// There was a function naming error that I did not notice. I changed the function name in the code.test.js file to match my funciton name. 
