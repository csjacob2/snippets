# Computing the Square Root
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