/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let f = 0, t = 0
    for ( let x of bills ) {
        if ( x == 5 ) {
            f++
        }else if ( x == 10 ) { 
            f--
            t++
        }else if ( t > 0 ) {
            t--
            f--
        }else {
            f -= 3            
        }
        if ( f < 0 ) 
            return false
    }
    return true
};
