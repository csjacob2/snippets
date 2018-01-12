# Question
**_Fibonacci Number Sequence: return nth term of the fibonacci sequence_**

```
   F(0) = 0
   F(1) = 1
   F(N) = F(N-1) + F(N-2)
   
   // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
   
   function fib(n) {
   }
```   

**Solution summary:** Solved using a technique called memoization. Create an array of each sum, using the previous entries in the array to build the next sum.

**Data structure used:** Recursion is used to calculate each sum using the two previous entries.

**ES6:** Two JavaScript files with the same solution, one in vanilla JavaScript, one with ES6 substituted where possible. The object in ES6 is created using the new `class` declaration.