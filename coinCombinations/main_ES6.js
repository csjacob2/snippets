/*In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).

 It is possible to make £2 in the following way:
 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

 How many different ways can £2 be made using any number of coins?
*/

/* converted to ES6 */

$(document).ready(function(){
    const amount = 200;
    const currencyValues = [ 1, 2, 3, 5, 10, 20, 50, 100, 200 ];
    var totalCoinCount = countCoins(currencyValues, amount);

    $('body div').append(totalCoinCount);
    console.log(`Total number of ways to make ${amount}p with a range of coins: ${totalCoinCount}`);
});


function countCoins(coinsArray, amount) {
    // set solutions matrix with zeroes (empties
    var solutionsMatrix = new Array(coinsArray.length);

    for (let i = 0; i <= coinsArray.length; i++) {
        solutionsMatrix[i] = new Array(coinsArray.length);
        for (let j = 0; j <= amount; j++) {
            solutionsMatrix[i][j] = 0;
        }
    }

    //set matrix for 0 amount and 0 value array
    // this is the base case start points
    for (let i = 0; i <= coinsArray.length; i++) {
        //only 1 way to return coins if amount is 0
        // sets first column to zero 1 [i,0]
        solutionsMatrix[i][0] = 1;
    }
    for (let j = 1; j <= amount; j++) {
        // only 0 ways to return coins if no array of coins is given (array is empty)
        // sets first row to 0 [0,j]
        // but this is technically redundant since we're setting the whole matrix to 0 at the top
        solutionsMatrix[0][j] = 0;
    }

    // we have coins in the array and a dollar amount
    // fill rest of the matrix
    // need to start i and j counters at 1 in order to not overwrite cols/row in matrix from above conditions
    for (let i = 1; i <= coinsArray.length; i++) {
        for (let j = 1; j <= amount; j++) {
            // check if current coin is less than the amount needed
            if (coinsArray[i-1] <= j) {
                //reduce the amount
                //use the subproblem (previous matrix) solution
                solutionsMatrix[i][j] = solutionsMatrix[i - 1][j] + solutionsMatrix[i][j - coinsArray[i - 1]];
            } else {
                //copy the value from the above row
                solutionsMatrix[i][j] = solutionsMatrix[i-1][j];
            }
        }
    }
    return solutionsMatrix[coinsArray.length][amount];
}