# Array Manipulations

## Reverse an array
**_Implement a function to reverse an array_**
**_For example reverse( [1,2,3,4,5] ) should return [5,4,3,2,1]_**

**Solution Summary:**  
Two functions to do this:
  1. `reverseArray` creates and returns a new array with the reversed values in it
  2. `reverseSameArray` swaps the values and returns the modified the original array  

**Testing:** tested with an even and odd number of values in the array to ensure it doesn't break when the two counters meet.


## Shuffle an array
**_Write a function that can shuffle the elements of an array._**
**_The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array. You are supplied with the function `getRandom` which can take two values `floor` and `ceiling`._**

**Solution Summary:**
1. Based somewhat on the insertion sort algorithm, start at the first element in the sorted array, generate a random index between 0 and array.length with `getRandom`, swap the elements.
2. Continue step 1 through each of the elements until you reach the end of the array.