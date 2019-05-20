function isSubsequence(subStr, str) {
  // If the substring is larger than the string,
  //   must be false.
  if (subStr.length > str.length) return false;
  // If the substring is equal to the string,
  //   must be true.
  if (subStr === str) return true;
  
  // Find the index of the first letter
  //   of the substring in the string
  let left = -1;
  for (let i = 0; i < str.length; i++) {
      if (str[i] === subStr[0]) {
          left = i;
          break;
      }
  }
  
  // If the first letter of the substring
  //   is not in the string, must be false
  if (left === -1) return false;
  
  // Find the index of the last letter of
  //   the substring in the string
  let right = -1;
  for (let i = str.length -1; i >= (left + subStr.length - 1); i--) {
      if (str[i] === subStr[subStr.length -1]) {
          right = i;
          break;
      }
  }
  
  // If the last letter fo the substring
  //   is not after the first letter
  //   of the substring and with enough
  //   space for the entire substring,
  //   must be false
  if (right === -1) return false;
  
  // Turn the substring into an array
  //   so it can be tested
  let testStr = subStr.split('');
  
  // As the letters of the substring appear
  //   in reverse in the string, remove them
  //   from the end of the test substring array.
  //   If the test substring array is empty,
  //   then all the letters of the substring appear
  //   in order within the string
  for (let i = right; i >= left; i--) {
      if (str[i] === testStr[testStr.length - 1]) testStr.pop();
      if (testStr.length === 0) return true;
  }
  
  // Otherwise return false
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
