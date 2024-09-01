/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let mag = {};
    for(let c of magazine ) 
        if (mag[c]) mag[c]++;
        else mag[c] = 1
    for(let c of ransomNote) 
        if (!mag[c] || --mag[c] < 0 ) 
            return false;
    return true;
};