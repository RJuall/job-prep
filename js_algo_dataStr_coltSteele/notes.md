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

- Understand the problem
- Explore concrete examples
- Break it down
- Solve/Simplify
- Look back and refactor



### Section 5 - Problem Solving Patterns

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