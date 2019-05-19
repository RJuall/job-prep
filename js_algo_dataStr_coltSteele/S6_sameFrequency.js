function sameFrequency(num1, num2) {
    if (num1 === num2) return true;

    const num1Arr = num1.toString().split('');
    const num2Arr = num2.toString().split('');

    if (num1Arr.length !== num2Arr.length) return false;

    const num1FreqObj = {};
    let returnState = true;

    num1Arr.forEach(elem => {
        num1FreqObj[elem] = ++num1FreqObj[elem] || 1;
    });
    num2Arr.forEach(elem => {
        if (!num1FreqObj.hasOwnProperty(elem)) {
            returnState = false;
        }
        
        num1FreqObj[elem] = --num1FreqObj[elem];

        if (num1FreqObj[elem] < 0)
            returnState = false;
    });

    return returnState;

}

const test1 = sameFrequency(182, 281);          // true
const test2 = sameFrequency(344, 334);            // false
const test3 = sameFrequency(3589578, 5879385);  // true
const test4 = sameFrequency(22, 222);           // false
const test5 = sameFrequency(23, 23);            // true

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);