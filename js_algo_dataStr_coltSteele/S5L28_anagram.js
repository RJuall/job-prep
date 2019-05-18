function anagram(str1, str2) {
    // Create an array of characters for each string
    //   Making the strings lowercase also
    let str1Array = str1.toLowerCase().split('');
    let str2Array = str2.toLowerCase().split('');

    // Filter out any non letter characters
    str1Array = str1Array.filter(char => /[a-z]/.test(char));
    str2Array = str2Array.filter(char => /[a-z]/.test(char));

    // Then check to see if the number of letters are the same
    if (str1Array.length !== str2Array.length)
        return false;

    // Create empty frequency objects
    const str1FrequencyObj = {};
    const str2FrequencyObj = {};

    // Populate the frequency objects with the two char arrays
    //   Key is the letter, val is the frequency of the letter
    for (let char of str1Array) {
        str1FrequencyObj[char] = ++str1FrequencyObj[char] || 1;
    }

    for (let char of str2Array) {
        str2FrequencyObj[char] = ++str2FrequencyObj[char] || 1;
    }

    // Compare the keys and values of the two objects
    //   to make sure they're the same
    for (let key in str1FrequencyObj) {
        if (str1FrequencyObj[key] !== str2FrequencyObj[key])
            return false;
    }

    // Return true if all tests passed
    return true;
}

const test1 = anagram("abc", "ab");
const test2 = anagram("abc", "bca");
const test3 = anagram("abb", "abc");
const test4 = anagram("this thing", "thing t h i s!");

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);