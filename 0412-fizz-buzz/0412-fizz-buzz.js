/**
 * @param {number} n
 * @return {string[]}
 */

/*
function fizzBuzz(int) {
    let answer = []

    for loop {
        if i is divisible by 3 {
            push "Fizz" into answer array
        } else if i is divisible by 5 {
            push "Buzz" into answer array
        } else if i is divisible by 3 and 5 {
            push "FizzBuzz" into answer array
        } else {
            push i into answer array
        }
    }

    return answer
}
*/

var fizzBuzz = function(n) {
    let answer = [];

    for (let i = 1; i <= n; i++) {
        if (i%3 === 0 && i%5 === 0) {
            answer.push("FizzBuzz");
        } else if (i%5 === 0) {
            answer.push("Buzz");
        } else if (i%3 === 0) {
            answer.push("Fizz");
        } else {
            answer.push(i.toString());
        };
    };

    return answer;
};