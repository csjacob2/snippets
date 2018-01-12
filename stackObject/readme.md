# Question
**_MaxStack class - all functions should be O(1)_**

```
class MaxStack {
	push(n) {

	}

	pop() {

	}

	max() {
		//return largest element in stack
	}
}
```

**Solution summary:** Solved by creating the stack as an object with a constructor function and supporting methods (push, pop, max). The pop function returns a null value if the stack is empty, so the main code calling pop() will need to catch and display a message if null is returned. `Math.max` is borrowed to return the max value in the array.

**Data structure used:** Prototype structure with the methods created externally instead of inside the `stack` constructor to prevent creating multiple instances of the methods for each `MaxStack` that is declared.

**Testing:** Each function (constructor and methods) are O(1) as they have no loops or recursive calls involved and execute from top to bottom once for each time they're invoked.

**ES6:** Two JavaScript files with the same solution, one in vanilla JavaScript, one with ES6 substituted where possible. The object in ES6 is created using the new `class` declaration.