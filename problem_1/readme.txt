Problem 1:
------------------------------------------------------------------------------------------
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
    1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).

It is possible to make £2 in the following way:
    1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

How many different ways can £2 be made using any number of coins?
------------------------------------------------------------------------------------------

• A sample of the output
Output to console: 
Total number of ways to make 200p with a range of coins: 987201

Output is also sent to a div on the main window through a jQuery append call.


• Why you chose the problems you did
Recursion seemed to be the more popular solution but I've always found recursion a bit more complex and harder to understand, so I went with a dynamic programming solution as this was something I was recently reading up on and learning about and thought it might be an interesting way of learning about the concept a bit more. I used a Java solution that I adjusted and adapted, using JavaScript and multi-dimensional arrays:

http://algorithms.tutorialhorizon.com/dynamic-programming-coin-change-problem/

The recursive algorithm runs at O(2^n) speed while the dynamic programming solution is O(n^2). While this could conceivably get quite slow for large values of n due to the nested loops, it'll always be faster than O(2^n) for the same number of values. That being said, this particular problem shouldn't be sending large values to the function.

I also located an algorithm that was based entirely on nested for loops for each possible coin value but I considered this a horrible solution as it:
a) looked horrible and very amateur (something I'd expect out of a highschool student just learning to code)
b) would have awful run time as it would increase exponentially for each nested loop
c) had each currency value hard coded into each loop. I wanted a dynamic solution that could easily be adjusted outside of the function itself


• A description of the process you followed in solving the problem
In initially pseudocoded the function based on the Java solution I located, after studying through both the recursion and dynamic programming solutions so I could understand how both worked. I wanted to make sure that I wasn't copying the function directly and also make sure I was understanding specifically how it was building the results matrix since that was going to be important in debugging and explaining it. 

As I coded each line, I stepped through it in Chrome Dev tools to make sure it wasn't breaking anything obvious. 

Once I'd completed the function I ran it completely and had to do some smaller bug fixes, again by stepping through with Chrome Dev tools (I mainly had some issues with the for loops being the correct size and populating the array accurately at first). I initially played around with the results in small values first to make sure I was getting the correct results (amount = 5, currencyValues = [1, 2, 3], totalCoinCount = 5). After this, I ran the full values to get a final result of 987201 from the values supplied in the original question.

I wanted to make sure my results were correct by testing the original Java code I was using as pseudocode so I copied the Java code into an online java compiler and executed it there to see what result it gave and verified that it returned the same answer as my JavaScript code.


• What reference sources you used, if any
I used the Java algorithm to base my code off of:
http://algorithms.tutorialhorizon.com/dynamic-programming-coin-change-problem/

and I also re-read a topcoder.com computer science tutorial on dynamic programming that I'd read two weeks ago:
https://www.topcoder.com/community/data-science/data-science-tutorials/dynamic-programming-from-novice-to-advanced/

The above article is actually what influenced me to approach the solution from a dynamic programming angle instead of recursion.


• How much time you spent on the exercise
Total time spent researching possible algorithms, and ways to tackle this solution, then coding it up, then bug fixing and testing, approximately 3 hours.