# JavaScript Algorithms and Data Structures Masterclass

## by Colt Steele

https://www.udemy.com/js-algorithms-and-data-structures-masterclass/

### Section 1 - Introduction

Lots of content

How to run the code...?

### Section 2 - Big O Notation

Big O very important to the subject of algorithms and data structures

Why does Big O notation exist?

Big O is used to try and figure out which algorithmic solution is the "best"

Reverse a string in JS: `string.split('').reverse().join('')`

Big O is useful in that it gives a precise vocabulary to talk about how code performs

Big O useful in discussing trade-offs between different approaches in code

Big O is useful in identifying inefficient code, pain points in codebases

```javascript
// First sum to an int algorithm
//    This solution is Big O(n)
const addUpTo = num => {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}
// Second sum to an int algorithm
//    This solution is Big O(1)
const addUpto = num => {
    return num * (num + 1) / 2;
}
```

What does better mean? Faster? Less memory intensive? More readable? Brevity?

Time is not a reliable indicator of speed or efficiency for code

Instead of counting units of time, Big O measures efficiency of code by measuring the number of simple operations the computer has to perform

Big O aims to give a general idea of the number of operations in any given algorithm

Big O allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

Big O cares about the trends, not the details

Big O is about the worst case scenario

Rules of Big O: Constants don't matter - `O(2n) === O(n)`

Rules of Big O: Smaller terms don't matter - `O(n^2 + 5n + 8) === O(n^2)`

Big O shorthands:

- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in an array or object is constant
- In a loop, the complexity is the length of the loop times the complexity of whatever happens in the loop

Auxiliary space complexity: The memory space required by an algorithm, not including the inputs

Most primitives are constant space

Strings require O(n) space, n indicating the string length

Reference types are generally O(n), such as the array length or the number of keys in an object

Logarithms are common in Big O notation, as in O(n log n)

The log base number is not important to Big O notation

Logarithmic time complexity is great, as in O(log n)

Most common Big O expressions: O(1), O(log n), O(n), O(n log n), O(n^2)

Searching and sorting algorithms can involve logarithmic time complexity

Recursion sometimes involves logarithmic space complexity

### Section 3 - Analyzing Performance of Arrays and Objects

How do objects and arrays work through the lens of Big O?

Why is adding elements to the beginning of arrays costly?

What are the runtimes for arrays and objects and their built-in methods

Objects are good when order doesn't matter and insertion and removal are important.

Big O of objects:

- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(1)

Big O of object methods:

- Object.keys - O(n)
- Object.values - O(n)
- Object.entries - O(n)
- hasOwnProperty - O(1)

Arrays are _ordered_ data structures

Big O of arrays:

- Insertion - _It depends..._
- Removal - _It depends..._
- Searching - O(n)
- Access - O(1)

Inserting to the end of an array is O(1)

Inserting within an array is O(n)

Removal from the end of an array is O(1)

Removal from within an array is O(n)

Big O of array operations:

- push - O(1)
- pop - O(1)
- shift - O(n)
- unshift - O(n)
- concat - O(n)
- slice - O(n)
- splice - O(n)
- sort - O(n log n)
- forEach/map/filter/reduce/etc. - O(n)

### Section 4 - Problem Solving Approach

What _is_ an algorithm?

What plan can be undertaken to solve an algorithm?

Compare and contrast problem solving patterns:

- Frequency counters
- Two pointer problems
- Divide and conquer

An algorithm is a process or a set of steps to accomplish a certain task

Just about everything in programming involves algorithms, it is the foundation for being a successful problem solver and developer

Steps for improving at algorithmic thinking and problem solving: Devise a plan for solving problems, master common problem solving patterns

Steps for problem solving:

1. Understand the problem
2. Explore concrete examples
3. Break it down
4. Solve/Simplify
5. Look back and refactor

Problem solving strategies adapted from George Polya's "How To Solve It"

Step one: Understand the problem

Important to make sure that the problem is thoroughly understood before beginning work on the problem

1. Ask clarification questions
2. Can you restate the problem in your own words?
3. What are the inputs that go into the problem?
4. What are the outputs that should come from the solution?
5. Can the outputs be determined from the inputs?
6. How should I label the important pieces of data that are a part of the problem?

One example:

- Write a function which takes two numbers and returns their sum
    - Restate: Implement addition
    - What are the inputs?
        - Only two numbers?
        - Ints or Floats or other?
        - How large will the inputs be?
    - What are the outputs?
        - Int? Float? String? Etc?
    - Etc.

Step two: Concrete examples

Examples can help understand the problem better

Examples also provide sanity checks that show the solution works the way it should

**User stories** or **Unit tests**

Explore examples:

- Start with simple examples
- Progress to more complex examples
- Explore examples with empty inputs
- Explore examples with invalid inputs

Step three: Break it down

Explicitly write out the steps needed

Forces one to think about the code to be written before writing before worrying about syntax, etc.

Writing out the steps beforehand in an interview setting can be important as the interviewer can see what the process would be even if time didn't allow for a full solve

Step four: Solve or simplify

If you can't solve the problem, solve a _simpler_ problem. Which means solve the parts that you can solve before trying to make progress on the parts that are giving you trouble

Simplifying will likely also give you better understanding towards the parts that are more challenging

In an interview session, make sure to get as much of the solution done as well as show how the problem could be solved as possible. Don't start with the part you don't know how to do and just spin your wheels

Refactoring questions:

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

```javascript
// Increment an object with individual alphanumeric characters in a string
function charCount(str) {
    let obj = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&  // numeric (0-9)
        !(code > 64 && code < 91) &&  // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
        return true;
}
```

### Section 5 - Problem Solving Patterns

How to improve in problem solving?

- Devise a plan for solving problems
- Master common problem solving patterns

Some problem solving patterns:

- Frequency counter
- Multiple pointers
- Sliding window
- Divide and conquer
- Dynamic programming
- Greedy algorithms
- Backtracking

Frequency counter: This pattern uses objects or sets to collect values or frequencies of values

A frequency counter can often avoid the need for nested loops or O(n^2) operations with arrays or strings

Problem: Write a function called same which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

```javascript
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
```

Given two strings, write a function to determine if the second string is an anagram of the first. 

```javascript
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
```

Instead of creating two objects and comparing them, the first object can be constructed and then the second array can decrement from that constructed object, leaving an empty object if the words are anagrams



### Section 6 - Optional Challenges

### Section 7 - Recursion

### Section 8 - Recursion Problem Set

### Section 9 - Challenging Recursion Problems

### Section 10 - Searching Algorithms

### Section 11 - Bubble Sort

### Section 12 - Selection Sort

### Section 13 - Insertion Sort

### Section 14 - Comparing Bubble, Selection, and Insertion Sort

### Section 15 - Merge Sort

### Section 16 - Quick Sort

### Section 17 - Radix Sort

### Section 18 - Data Structures Introduction

### Section 19 - Singly Linked Lists

### Section 20 - Doubly Linked Lists

### Section 21 - Stacks + Queues

### Section 22 - Binary Search Trees

### Section 23 - Tree Traversal

### Section 24 - Binary Heaps

### Section 25 - Hash Tables

### Section 26 - Graphs

### Section 27 - Graph Traversal

### Section 28 - Dijkstra's Algorithm

### Section 29 - Dynamic Programming

### Section 30 - The Wild West