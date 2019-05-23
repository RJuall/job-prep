function minSubArrayLen(arr, sum) {
    /*
        Write a function called minSubArrayLen which accepts two parameters -
        an array of positive integers and a positive integer.
        This function should return the minimal length of a contiguous subarray
        of which the sum is greater than or equal to the integer passed to the
        function. If there isn't one, return 0 instead.
        Time complexity:  O(n)
        Space complexity: O(1)
    */

    let left = 0;
    let right = 1;
    // Initialize the minSubArray to the highest value
    //   this will represent subarrays that sum to be at
    //   least equal to the requested sum
    let minSubArray = Infinity;
    // tempSum is the sum of the values between left and right
    //   from left up to, but not including, right
    let tempSum = arr[left];

    // Bound the loop to the length of the array
    while (left < arr.length) {
        // If the temporary sum is larger than the input sum
        //   check if the subarray is smaller than the currently
        //   recorded minimum subarray
        if (tempSum >= sum) {
            if (right - left < minSubArray) minSubArray = right - left;
            // If the left it iterated, its current val must be
            //   subtracted from the sum
            tempSum -= arr[left];
            left++;
            // Can't have left and right pointing at the same val
            if (left === right) right++;
        } else if (right === arr.length) {
            // If right has hit the end of the array,
            //   keep left advancing, looking for a smaller
            //   subarray if possible
            tempSum -= arr[left];
            left++;
        } else {
            // If the sum is not greater and right can still advance,
            //   do so
            tempSum += arr[right];
            right++;
        }
    }

    // If minSubArray is still Infinity, then the array does not
    //   sum to the requested input
    if (minSubArray === Infinity) return 0;
    return minSubArray;
}

const test1 = minSubArrayLen([2,3,1,2,4,3], 7);                 // 2 -> bc [4,3] is the smallest subarray
const test2 = minSubArrayLen([2,1,6,5,4], 9);                   // 2 -> bc [5,4] is the smallest subarray
const test3 = minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52); // 1 -> bc [62] is > 52
const test4 = minSubArrayLen([1,4,16,22,5,7,8,9,10], 39);       // 3
const test5 = minSubArrayLen([1,4,16,22,5,7,8,9,10], 55);       // 5
const test6 = minSubArrayLen([4,3,3,8,1,2,3], 11);              // 2
const test7 = minSubArrayLen([1,4,16,22,5,7,8,9,10], 95);       // 0

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
console.log(test7);