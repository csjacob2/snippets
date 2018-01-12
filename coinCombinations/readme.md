# Question
**_In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:_**  
       1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
   
**_It is possible to make £2 in the following way:_**  
       1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
   
**_How many different ways can £2 be made using any number of coins?_**

**Solution summary:** Using dynamic programming and memoization, build a multi-dimensional array to hold all possible combinations of coins and the amounts they total. Use loops to calculate the combinations of coins and the amount they equal, and store the results in the array. Instead of calculating combination though, refer to previous entries in the array to see if the solution was already calculated and if so, copy it on that iteration. This prevents calculating every possible combination. Once the array is filled, return the last/final value.

**Data structure used:** Since the total number of values to be stored is known, an `Array` of *number of coins* of size *amount* (eg: `array[10][200]` for 9 coins and up to 200p amounts). 

**Testing:** Copied an existing solution written in Java into an online Java compiler and executed it to see what result it gave and verified that it returned the same answer as the JavaScript code.

**ES6:** Two JavaScript files with the same solution, one in vanilla JavaScript, one with ES6 substituted where possible.