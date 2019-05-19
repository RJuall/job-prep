function countUniqueValues(arr) {
    // const newSet = new Set(arr);
    // return newSet.size;

    let first = 0;
    let second = 1;
    let numUniqueValues = 0;

    if (arr === []) {
        return numUniqueValues;
    }

    while (second <= arr.length) {
        numUniqueValues++;
        while (arr[first] === arr[second])
            second++;
        first = second;
        second++;
    }

    return numUniqueValues;
}

const test1 = countUniqueValues([1,1,1,1,1,1,2]);
const test2 = countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);
const test3 = countUniqueValues([-2,-1,-1,0,1]);
const test4 = countUniqueValues([]);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);