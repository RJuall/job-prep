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



### Section 3 - Analyzing Performance of Arrays and Objects

### Section 4 - Problem Solving Approach

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