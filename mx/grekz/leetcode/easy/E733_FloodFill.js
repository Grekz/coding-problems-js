/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const n = image.length, m = image[0].length, c = image[sr][sc]
    const dfs = (a, b) => {
        if ( a < 0 || b < 0 || a >= n || b >= m || image[a][b] != c )
            return
        image[a][b] = newColor
        dfs(a+1,b)
        dfs(a-1,b)
        dfs(a,b+1)
        dfs(a,b-1)

    }
    if ( c != newColor ) 
        dfs(sr, sc)
    return image
};