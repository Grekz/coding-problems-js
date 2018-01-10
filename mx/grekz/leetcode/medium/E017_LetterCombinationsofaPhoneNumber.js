/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if ( digits.length < 1 || digits.includes("0") )
        return []
    const val = {
        '1': '*',
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    const reducer = (x,y) => { 
        let tmp = []
        for ( let i of x ) {
            for ( let j of val[y] ) { 
                tmp.push(i+j)
            } 
        }
        return tmp
    }
    return digits.split("").reduce( reducer, ['']);
};