/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0)
    let res = 0
    let n = heights.length
    let stack = [0]
    const isEmpty = () => stack.length <= 0
    const peek = () => stack[stack.length-1]
    const pop = () => heights[stack.pop()]
    for ( let i = 0; i <= n; i++ ) {
        let cur = i == n ? 0 : heights[i]
        while ( !isEmpty() && cur < heights[peek()] ) {
            let h = pop()
            let w = isEmpty() ? i : i - peek() - 1
            res = Math.max(res, h * w)
        }
        stack.push(i)
    }
    return res
};