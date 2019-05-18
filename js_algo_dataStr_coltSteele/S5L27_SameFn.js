function same(baseVals, squareVals) {
    // Arrays must be equal
    if (baseVals.length !== squareVals.length) {
        return false;
    }

    // Empty objects to hold values and frequencies
    baseValsFrequency = {};
    squareValsFrequency = {};

    // Frequency of each value in the non-squared array
    for (let val of baseVals) {
        baseValsFrequency[val] = ++baseValsFrequency[val] || 1;
    }

    // Frequency of each value in the squared array
    for (let val of squareVals) {
        squareValsFrequency[val] = ++squareValsFrequency[val] || 1;
    }

    // console.log(baseValsFrequency);
    // console.log(squareValsFrequency);

    // Compares the frequency of the non-squared object to the squared object
    for (let [key, val] of Object.entries(baseValsFrequency)) {
        if (squareValsFrequency[(key**2)] !== val) {
            return false;
        }
    }

    // Return true if passes all tests
    return true;
}

test1 = same([1,2], [1]);
test2 = same([2,2,4,1], [1,4,4,16]);
test3 = same([2,3,2,1], [1,2,3,4]);

console.log(test1);
console.log(test2);
console.log(test3);