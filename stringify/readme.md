# Question
**_Implement your own version of JSON's `stringify` function_**
Test conditions:
- number => 1
- string => "this is a test line"
- boolean => true
- boolean sounding string => "true"
- array with above values => [1,"false",false,"test string"]
- object: => ["x":5, "y":2]

1. Tests and converts string, number, boolean, array and objects.
2. No test conditions for errors, blanks, or other types as this was originally developed quickly. Small edits were made just to clean it up and convert the variables to ES6 template strings.
3. Object and Array conditions use a recursive call to the function to format data which can potentially be string, number or boolean. 