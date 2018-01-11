# Question
**_A particular school offers cash rewards to children with good attendance and punctuality. If they are absent for three consecutive days or late on more than one occasion then they forfeit their prize._**

**_During an n-day period a trinary string is formed for each child consisting of L's (late), O's (on time), and A's (absent)._**

**_Although there are eighty-one trinary strings for a 4-day period that can be formed, exactly forty-three strings would lead to a prize:_**

     OOOO OOOA OOOL OOAO OOAA OOAL OOLO OOLA OAOO OAOA
     OAOL OAAO OAAL OALO OALA OLOO OLOA OLAO OLAA AOOO
     AOOA AOOL AOAO AOAA AOAL AOLO AOLA AAOO AAOA AAOL
     AALO AALA ALOO ALOA ALAO ALAA LOOO LOOA LOAO LOAA
     LAOO LAOA LAAO

**_How many "prize" strings exist over a 30-day period?_**

**Solution summary:** Through recursion, build start building substrings of the prize strings. If it hits a failure case (L > 1 or A in a sequence of 3), return a fail, else continue until it hits the max size (days) while counting the prize state.
- This uses a process called [memoization](https://en.wikipedia.org/wiki/Memoization), which returns small solutions and builds on them to produce larger and similar solutions. It is very effective when needing to analyze large amounts of possible solutions such as 30 character length strings of all possible combinations. Instead of generating potentially millions of unnecessary data, produce small incremental solutions and build on them.

**Data structure used:** Since the total number of values to be stored is unknown, `Map` prototype is used. This also allows storing a key (index) value for determining if a solution has been stored on a previous iteration.

The `Map` variable was moved out of global scope (where it was declared for initial solving of the solution) and wrapped in a closure for proper JavaScript structure.

**Testing:** An [online C++ application](http://euler.stephan-brumme.com/191/) was used to run the problem and compared the output for days=29 to ensure output matched.

**ES6:** Two JavaScript files with the same solution, one in vanilla JavaScript, one with ES6 substituted where possible.