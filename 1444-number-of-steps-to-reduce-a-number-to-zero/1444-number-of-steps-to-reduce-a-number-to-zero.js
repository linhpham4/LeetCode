/**
 * @param {number} num
 * @return {number}
 */

 /*
 function(num) {
    let steps = 0
    let newNum = num

    while newNum is not zero
    if newNum is even {
        newNum / 2
        steps ++
    } else {
        newNum - 1
        steps++
    }

    return steps
 }
 */
var numberOfSteps = function(num) {
    let steps = 0;
    let newNum = num;

    while (newNum !== 0) {
        if (newNum % 2 === 0) {
            newNum = newNum / 2;
            steps++;
        } else {
            newNum --;
            steps++;
        };
    };

    return steps;
};