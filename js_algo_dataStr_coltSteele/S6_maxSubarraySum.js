function maxSubarraySum(arr, sumNum) {
    // Given an array of integers and a number, write a function
    //   called maxSubarraySum, which finds the maximum sum of a
    //   subarray with the length of the number passed to
    //   the function. The subarray must consist of consecutive
    //   elements from the original array. Time complexity: O(n)
    //   Space complexity: O(1)


    // Return `null` if subArray length
    //   greater than array length
    if (sumNum > arr.length) return null;

    // Initialize maximum subarray sum
    //   counter to the first possible
    //   contiguous subarray
    let maxSum = 0;
    for (let i = 0; i < sumNum; i++) {
        maxSum += arr[i];
    }

    // Set the temporary sum variable to the
    //   initial maximum subarray sum value
    let tempNum = maxSum;

    // Iterate through the array adding the next
    //   value in the array and subtracting the last
    //   so to maintain a constant subarray size.
    //   Change the maximum sum of a subarray value
    //   if a larger value is found
    for (let i = sumNum; i < arr.length; i++) {
        tempNum += arr[i];
        tempNum -= arr[(i-sumNum)];
        if (tempNum > maxSum) maxSum = tempNum;
    }

    return maxSum;
}

const test1 = maxSubarraySum([100,200,300,400], 2);         // 700
const test2 = maxSubarraySum([1,4,2,10,23,3,1,0,20], 4);    // 39
const test3 = maxSubarraySum([-3,4,0,-2,6,-1], 2);          // 5
const test4 = maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2);   // 5
const test5 = maxSubarraySum([2,3], 3);                     // null

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);