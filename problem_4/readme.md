# Question 1
**_Implement a function to reverse an array_**   
**_For example reverse( [1,2,3,4,5] ) should return [5,4,3,2,1]_**

**Solution Summary:**  
Two functions to do this:
  1. `reverseArray` creates and returns a new array with the reversed values in it
  2. `reverseSameArray` swaps the values and returns the modified the original array  

**Testing:** tested with an even and odd number of values in the array to ensure it doesn't break when the two counters meet.

# Question 2
**_Implement a function to compute the square root of a given number_**  
**_For example square_root(4) should return 2 and square_root(2) should return ~1.4142_**

**Solution Summary:** Use [Hero's Algorithm (aka Heron, aka Babylonian method)](https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method)

Pseudocode to determine the square root of n:
```
1. start with x, where x is a random guess
2. multiply x with itself
3. if x*x is close (or equal to) n, return x
4. else newX = avg(x+n) / x[i-1]
5. goto 2

(can change formula from x[i-1] since we're doing this recursively)
```

**Testing:** Extra function `loopSqrt` included to test a range of numbers to ensure it doesn't break.
- an undetected bug originally created values with too many decimal places, causing a stack overflow, but without testing enough numbers, this bug slipped through originally