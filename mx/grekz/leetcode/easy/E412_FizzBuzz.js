/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return Array.apply(null, {length: n}).map( ( e, i) => {
        i++
        if (i % 3 == 0 && i % 5 == 0) {
            return "FizzBuzz"
        } else if (i % 3 == 0) {
            return "Fizz"
        } else if (i % 5 == 0) {
            return "Buzz"
        }
        return i + ""
    })
};