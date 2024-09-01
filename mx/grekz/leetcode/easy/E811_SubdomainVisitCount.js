/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let res = []
    let map = new Map()
    const get = x => !!map.get(x) ? map.get(x) : 0
    for ( let dom of cpdomains ) {
        let cur = dom.split(" ")
        let sd = cur[1]
        let count = parseInt(cur[0], 10)
        map.set(sd, get(sd) + count)
        let idx = sd.indexOf('.')
        while (idx > -1) {
            sd = sd.substring(idx+1)
            map.set(sd, get(sd) + count)
            idx = sd.indexOf('.')
        }
    }
    for ( let entry of map.entries() ) {
        res.push(entry[1] + ' ' + entry[0])
    }
    return res
};