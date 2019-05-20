function isSubsequence(subStr, str) {

    if (subStr.length > str.length) return false;
    if (subStr === str) return true;

    let left = -1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === subStr[0]) {
            left = i;
            break;
        }
    }

    if (left === -1) return false;

    let right = -1;
    
    for (let i = str.length - 1; i >= (left + subStr.length - 1); i--) {
        if (str[i] === subStr[subStr.length - 1]) {
            right = i;
            break;
        }
    }

    if (right === -1) return false;

    let testStr = subStr.split('');

    for (let i = right; i >= left; i--) {
        if (str[i] === testStr[testStr.length - 1]) {
            testStr.pop();
            console.log(testStr);
        }        
        if (testStr.length === 0) {
            return true;
        } 
    }

    return false;
}

const test1 = isSubsequence('hello', 'hello world');    // true
const test2 = isSubsequence('sing', 'sting');           // true
const test3 = isSubsequence('abc', 'abracadabra');      // true
const test4 = isSubsequence('abc', 'acb');              // false
const test5 = isSubsequence('abcd', 'abc');             // false
const test6 = isSubsequence('this', 'this');            // true

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);