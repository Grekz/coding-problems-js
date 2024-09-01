/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num == 0 || num == 14) return false;
    if (num == 1 || num == 6 || num == 8) return true;
    if ( num % 5 == 0) return isUgly(num / 5);
    if ( num % 3 == 0) return isUgly(num / 3);
    if ( num % 2 == 0) return isUgly(num / 2);
    return false;
};