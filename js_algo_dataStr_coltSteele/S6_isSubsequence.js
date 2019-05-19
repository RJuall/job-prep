function isSubsequence(subStr, str) {

    if (subStr.length > str.length) return false;
    if (subStr === str) return true;

    return "STUB";
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