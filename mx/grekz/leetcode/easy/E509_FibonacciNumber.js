/**
 * @param {number} N
 * @return {number}
 */
var fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2)