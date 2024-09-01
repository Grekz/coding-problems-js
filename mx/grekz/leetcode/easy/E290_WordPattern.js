
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let words = str.split(" ")
    if (words.length != pattern.length) return false
    let dic = {}
    for( let i = 0; i < words.length; i++){
        let char = pattern.charAt(i) + ""
        if(dic.hasOwnProperty(char)){
            if (dic[char] != words[i]) {
                return false
            }
        }else if (Object.values(dic).includes(words[i])){
            return false
        }else{
            dic[char] = words[i]
        }
    }
    return true
};