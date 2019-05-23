function findLongestSubstring(str) {
    /*
        Write a function called findLongestSubstring, which accepts a string
        and returns the length of the longest substring with all distinct
        characters.
    */

    // Return 0 for an empty string
    if (str.length === 0) return 0;

    // Start a pointer left and right
    //   and initialize a substring
    //   with the contents of the pointers
    //   and the current longest substring
    //   with distinct characters at 1
    let left = 0;
    let right = 1;
    let substring = str[left];
    let longestSubstring = 1;

    while (left < str.length) {
        // If we have reached the end of the
        //   string, break
        if (right === str.length) {
            break;
        }
        // If the character is not in the current 
        //   substring, add it, increment right
        //   and check to see if it's the longest
        //   substring
        else if (!substring.includes(str[right])) {
            substring = substring.concat(str[right]);
            right++;
            if ((right - left) > longestSubstring) longestSubstring = right - left;
        }
        else {
            // If the character is in the substring
            //    jump left to the right of the first
            //    occurrence of the char and add it to
            //    the end of the new substring
            let index = substring.indexOf(str[right]);
            index++;
            substring = substring.slice(index);
            substring = substring.concat(str[right]);
            right++;
            left += index;
        }
    }

    return longestSubstring;
}

const test1 = findLongestSubstring('');                 // 0
const test2 = findLongestSubstring('rithmschool');      // 7
const test3 = findLongestSubstring('thisisawesome');    // 6
const test4 = findLongestSubstring('thecatinthehat');   // 7
const test5 = findLongestSubstring('bbbbbbb');          // 1
const test6 = findLongestSubstring('longestsubstring'); // 8
const test7 = findLongestSubstring('thisishowwedoit');  // 6

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
console.log(test7);