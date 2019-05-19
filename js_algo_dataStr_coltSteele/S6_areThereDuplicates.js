function areThereDuplicates(...Args) {

    /*     
    const arrArgs = [...Args];
    const setArgs = new Set(arrArgs);
    if (arrArgs.length === setArgs.size) {
        return false;
    }
    else {
        return true;
    } 
    */

    // return new Set(arguments).size !== arguments.length

    const arrArgs = [...Args];
    const argFreqObj = {};

    for (elem of arrArgs) {
        argFreqObj[elem] = ++argFreqObj[elem] || 1;
        if (argFreqObj[elem] > 1) {
            return true;
        }
    };

    return false;
}

const test1 = areThereDuplicates(1,2,3);                // false
const test2 = areThereDuplicates(1,2,2);                // true
const test3 = areThereDuplicates('a', 'b', 'c', 'a');   // true
const test4 = areThereDuplicates('a', 'b', 'd', 'e');   // false

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);