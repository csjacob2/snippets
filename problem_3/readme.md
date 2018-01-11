# Question
**_You are provided the `flip` function:_**  
**_You must implement a `randomNumber(n)` function that generates a random number greater than or equal to 0, and less than input n._**  
```
- n must be greater than 0
- n must be less than 1,000,000
- Your only source of randomness must be the provided `flip()` function
- You cannot use `Math.random` in your implementation
- You can use Google to figure out how to do this
```

**Solution Summary:** 
1. `flip()` returns a random true/false value, which is translated into 1 or 0  
2. Build a string `randomString` consisting of random 1s and 0s, limiting the length of the string to the length of the binary value of n
3. If the binary to decimal value of `randomString` is greater than or equal to n, goto 2
4. Return the binary to decimal value of `randomString`

**Testing:**  
Extra test supporter function `calculateDistribution` to run x number of times to generate key/value pairs to count the number of times each random value occurs.  
- this is to eyeball the distribution range to see if it's truly random or if it's skewed to any particular values
- this supporter function also allows testing to generate all possible random values in the range (if x is large enough) and ensure `randomNumber(n)` stays within the bounds of [0,n)