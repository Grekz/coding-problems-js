/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    let res = ""
    for (let c of str.split("")) {
        let oc = c.charCodeAt(0)
        res += oc <= 90 && oc >= 65 ? String.fromCharCode(oc + 32) : c
    }
    return res
};