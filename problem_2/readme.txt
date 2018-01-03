Problem 2:
------------------------------------------------------------------------------------------
A particular school offers cash rewards to children with good attendance and punctuality. If they are absent for three consecutive days or late on more than one occasion then they forfeit their prize.

During an n-day period a trinary string is formed for each child consisting of L's (late), O's (on time), and A's (absent).

Although there are eighty-one trinary strings for a 4-day period that can be formed, exactly forty-three strings would lead to a prize:

OOOO OOOA OOOL OOAO OOAA OOAL OOLO OOLA OAOO OAOA
OAOL OAAO OAAL OALO OALA OLOO OLOA OLAO OLAA AOOO
AOOA AOOL AOAO AOAA AOAL AOLO AOLA AAOO AAOA AAOL
AALO AALA ALOO ALOA ALAO ALAA LOOO LOOA LOAO LOAA
LAOO LAOA LAAO

How many "prize" strings exist over a 30-day period?
------------------------------------------------------------------------------------------

• A sample of the output
Output to console/div in window:
Total number of prizes for a 30 day period: 1918080160


• Why you chose the problems you did
At first I thought about approaching this the same way as the previous problem, but that seemed counter-productive and not quite the goal of the assignment.

I found an algorithm that showed an inductive technique that cleverly built on small subsets and applied a transformation rule and I spent some time understanding the formulas for this. I thought this was a fast and clever method and was going to use this originally, but on further reasoning, I realized that this actually contradicted the instructions given which was that it wasn't necessarily good for production. The induction technique is fast and optimized but not exactly clear to an outside viewer or other developer as the formulas are pretty cryptic. 

Instead, I located a process that through recursion builds substrings and if it hits a failure case (L > 1 or A in a sequence of 3), it returns a fail, else it continues until it hits the max size (days) while counting the prize state. This is a process called memoization, which is also a similar process I used for the previous solution, although I approached it differently in this case (recursion).


• A description of the process you followed in solving the problem
Since I didn't know the total size of the values I'd be storing, I chose the Map prototype. This also allowed me to store a key (index) value of my choosing which I discovered sped up the algorithm. I tested this running the function with and without the uniqueKey variable. While the function still output the correct value without this mechanism, it took over 10 seconds to calculate 30 days, while it was under 1 second with the variable in place.

Initially at the start of building the function, I left the memoMap variable in global scope, along with function calculatePrizes in the main scope of main.js while calling it directly in document.ready. This was just to quickly get the code running and bug fix it. 

I stepped through each part, including walking through each of the recursive stages, in Chrome Dev tools and tracked the expected output on paper initially (somewhat necessary with recursive calls). I started with small values of 2 and 3 since I knew the expected values, which were reasonable and the recursive steps were easier to follow. I made a few small tweaks to the calculations until I was getting the correct values at each stage. 

After I knew it was full function was correct, I knew I had to move the memoMap variable out of global scope since this is bad coding practice, so I wrapped it in a closure and changed the function structure slightly. I re-ran the code, adjusted it a bit to fix the errors with the calls, and ensured it was returning the correct values.

I also found an online C++ application that ran the problem and compared the output for days=29 (it would not run days=30) to ensure my output matched.


• What reference sources you used, if any
My initial research into the induction model and understanding the patterns of substrings and the transformation calculations came from here:
https://oop123.wordpress.com/2011/05/20/project-euler-191-java/
http://jsomers.net/blog/project-euler-problem-191-or-how-i-learned-to-stop-counting-and-love-induction

The memoization algorithm, I discovered here:
http://jaredks.github.io/project-euler-191/

as well as reading up on the details of memoization on wikipedia:
https://en.wikipedia.org/wiki/Memoization

This is the online C++ app that I ran day values through to get the results in order to compare my results to in order to ensure I had the right answer. This is also where I discovered the uniqueKey value increased the speed of the algorithm. 
http://euler.stephan-brumme.com/191/

I also played around with this combination/permutation calculator to generate all possible 2, 3 and 4 trinary strings initially to get a feel for the substring combinations I was looking for, especially when I was figuring out the induction technique:
https://planetcalc.com/4241/


• How much time you spent on the exercise
Because I spent a bit of time studying and figuring out the induction technique, then falling down the rabbit hole of studying memoization more, I probably spent a bit more time on this one than the previous question, approximately 5 hours. If I'd avoided the induction approach and didn't spend as much time reading up on memoization, it probably would have been a bit less, around 3 hours.
