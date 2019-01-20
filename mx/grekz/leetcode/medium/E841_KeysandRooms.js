/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let seen = Array(rooms.length).fill(false)
    let stack = [0]
    seen[0] = true
    while (stack.length != 0) {
        const cur = stack.pop()
        for (const n of rooms[cur])
            if (!seen[n]) {
                seen[n] = true
                stack.push(n)
            }
    }
    for (const x of seen)
        if (!x)
            return false
    return true
};
