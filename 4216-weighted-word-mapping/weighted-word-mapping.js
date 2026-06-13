/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let result = "";

    for (const word of words) {
        let sum = 0;
        for (const ch of word) {
            const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            sum += weights[index];
        }
        const remainder = sum % 26;
        const mappedChar = String.fromCharCode('z'.charCodeAt(0) - remainder);
        result += mappedChar;
    }

    return result;
    
};