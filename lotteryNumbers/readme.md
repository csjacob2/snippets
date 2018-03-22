# Winning Ticket!
**_Your favorite uncle, Morty, is crazy about the lottery and even crazier about how he picks his “lucky” numbers. And even though his “never fail” strategy has yet to succeed, Uncle Morty doesn't let that get him down._**

**_Every week he searches through the Sunday newspaper to find a string of digits that might be potential lottery picks. But this week the newspaper has moved to a new electronic format, and instead of a comfortable pile of papers, Uncle Morty receives a text file with the stories._**

**_Help your Uncle find his lotto picks. Given a large series of number strings, return each that might be suitable for a lottery ticket pick. Note that a valid lottery ticket must have 7 unique numbers between 1 and 59, digits must be used in order, and every digit must be used exactly once._**

**_For example, given the following strings:_**

`[ "569815571556", "4938532894754", "1234567", "472844278465445"]`

**_Your function should return:_**

`4938532894754 -> 49 38 53 28 9 47 54`
`1234567 -> 1 2 3 4 5 6 7`

**Solution summary:** Uses recursion and a depth first search tree structure to start building double digit options first, followed by single digits to fill in any options after that. The algorithm automatically discards any strings that are too short (<7) or too long (>14) so it will only try to make number combos out of strings within this length. It doesn't find all possible lottery number combos, just the first valid one.

**Testing:** Ran a combination of test strings, from too long to too short, plus ones with combinations of numbers that would create values out of the 1-59 range, as well as duplicates. It is possible there are strings that might cause this algorithm to break, but this would require more stringent testing.
