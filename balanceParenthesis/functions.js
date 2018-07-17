/*
 Given a string of parenthesis such as ‘{}()[]’ return true or false if every opening parenthesis matches its closing partner.
 NOTE: parenthesis should also match in proper order, so "{ ( ) }" is true while "{ [ } ]" is false
 we want properly structured sets of parentheses, not just matching setes

RULES:
- return true if null, empty string, balanced parentheses: '{}([])' or ‘{a}[b(c)]}’
- return false if '[(]' , ']' , '[(])', '}[]{' , '['
- ignore any non-parentheses characters
*/

$(document).ready(function(){
    console.log(checkBalanced('{a}[b(c)]'));                                    // true
    console.log(checkBalanced('[(])'));                                         // false
    console.log(checkBalanced('var fiddle = function() { doggy.eat();'));       // false
    console.log(checkBalanced('{}([])'));                                       // true
    console.log(checkBalanced('[(]{)}'));                                       // false
    console.log(checkBalanced('var supYo  = { hey: dog() }'));                  // true
});


function checkBalanced(parenString) {
    let parenStack = [];
    let stringArray = parenString.split('');

    for (let element of stringArray) {

        if (isParenthesis(element)) {
            // element is parenthesis, continue processing

            if (isRightParenthesis(element)) {
                // element is right parenthesis, compare to top of stack and if incorrect, return false

                let topElement = parenStack.pop();

                if (!matchParentheses(topElement, element)) {
                    return false;
                }

            } else {
                // element is left parenthesis, push to stack
                parenStack.push(element);
            }
        }
    }

    return parenStack.length == 0;
}

function isParenthesis(e) {
    const parenString = '[](){}';
    return parenString.indexOf(e) != -1;
}

function isRightParenthesis(e){
    const parenRight = '])}';
    return parenRight.indexOf(e) != -1;
}

function matchParentheses(e1, e2) {
    const parenString = '[](){}';

    // index of matching parenthesis will be off by 1
    return (parenString.indexOf(e1) - parenString.indexOf(e2) == -1);
}