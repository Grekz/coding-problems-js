/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim()
    const z = '0',
          n = '9'
    let sign =  res  = ''
    if ( str[0] == '-' || str[0] == '+' ) {
        sign = str[0]
        str = str.substr(1)
    }
    for( let x of str ){
        if ( x >= z && x <= n )
            res += x
        else
            break
    }
    if (res !== '' ){
        const resInt = parseInt(sign+res)
        if ( resInt > 2147483647 ) return 2147483647
        if ( resInt < -2147483648 ) return -2147483648
        return resInt        
    }    
    return 0
};