/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    let c = Array(N + 1).fill(0)
    for ( let x of trust ) {
        c[x[0]] -= 1
        c[x[1]] += 1
    }
    for ( let i = 1; i <= N; i++ ) {
        if ( c[i] == N - 1 ) {
            return i
        }
    }
    return -1
};