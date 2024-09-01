/**
 * @param {number[]} data
 * @return {boolean}
 [235,140,4]
 [197,130,1]
 */
var validUtf8 = function (data) {
    let c = 0
    for (let d of data) {
        if (d >= 128 && d <= 191) {
            if (c == 0)
                return false
            c -= 1
        } else {
            if (c != 0)
                return false
            if (d >= 128) {
                if (d < 224)
                    c = 1
                else if (d < 240)
                    c = 2
                else if (d < 248)
                    c = 3
                else
                    return false
            }
        }
    }
    return c == 0
};