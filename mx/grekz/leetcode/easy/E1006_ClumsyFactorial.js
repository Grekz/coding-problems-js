/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
    const magic = [1, 2, 2, -1, 0, 0, 3, 3]
    return N + magic[ N > 4 ? N % 4 : N + 3]
};