function maxSubarraySum(arr, n) {
    
    if (arr.length === 0 || n < 1)
        return null;
    if (arr.length < n)
        return null;

    if (n === 1) {
        let max = arr[0];
        arr.forEach(elem => {
            if (elem > max) {
                max = elem;
            }
        });
        return max;
    }

    let left = 0;
    let right = n - 1;
    let maxSub = Number.NEGATIVE_INFINITY;

    while (right < arr.length) {
        let sum = 0;
        for (let i = left; i <= right; i++) {
            sum += arr[i];
        }
        if (sum > maxSub) {
            maxSub = sum;
        }
        left++;
        right++;

    }
    return maxSub;
}

const test1 = maxSubarraySum([1,2,5,2,8,1,5], 2);    // 10
const test2 = maxSubarraySum([1,2,5,2,8,1,7], 4);    // 18
const test3 = maxSubarraySum([4,2,1,6], 1);    // 6
const test4 = maxSubarraySum([4,2,1,6,2], 4);    // 13
const test5 = maxSubarraySum([], 4);    // null

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);