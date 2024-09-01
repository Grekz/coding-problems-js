/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a,b) => a - b)
    const n = deck.length
    let res = Array(n)
    let queue = Array(n)
    for ( let i = 0; i < n; ++i ) {
        queue[i] = i
    }
    for ( let card of deck ) {
        res[queue.shift()] = card
        if ( queue.length > 0 ) {
            queue.push(queue.shift())
        }
    }
    return res
};