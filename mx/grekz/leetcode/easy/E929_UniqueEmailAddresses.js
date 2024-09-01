/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    let set = new Set()
    for (let e of emails) {
        let parts = e.split(/[+@]/)
        let first = parts[0]
        let last = parts[parts.length - 1]
        first = first.replace(/\./g, "")
        set.add(first + last)
    }
    return set.size
};