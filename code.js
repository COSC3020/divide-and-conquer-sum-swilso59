function divConqSum(arr) {
    // Base case: If the array has only one element, return that element.
    if (arr.length === 1) {
        return arr[0];
    }

    // Split the array into three roughly equal sub-arrays.
    const n = arr.length;
    const third = Math.floor(n / 3);
    const subarray1 = arr.slice(0, third);
    const subarray2 = arr.slice(third, 2 * third);
    const subarray3 = arr.slice(2 * third);

    // Recursively call divConqSum on each sub-array and sum the results.
    const sum1 = divConqSum(subarray1);
    const sum2 = divConqSum(subarray2);
    const sum3 = divConqSum(subarray3);

    // Return the total sum.
    return sum1 + sum2 + sum3;
}
// Import or include the divConqSum function here.

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

