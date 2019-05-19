function averagePair(arr, avg) {
    if (arr.length === 0 || avg === 0) {
        return false;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if ((arr[left] + arr[right]) / 2 === avg) {
            return true;
        }
        else if ((arr[left] + arr[right]) / 2 > avg) {
            right--;
        }
        else {
            left++;
            right = arr.length - 1;
        }
    }

    return false;
}

const test1 = averagePair([1,2,3], 2.5);                // true
const test2 = averagePair([1,3,3,5,6,7,10,12,19], 2);   // true
const test3 = averagePair([-1,0,3,4,5,6], 4.1);         // false
const test4 = averagePair([], 4);                       // false

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);