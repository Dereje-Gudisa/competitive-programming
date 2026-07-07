/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    const digits = n.toString();
    let xStr = "";
    let sum = 0;

    for (const ch of digits) {
        if (ch !== '0') {
            xStr += ch;
            sum += parseInt(ch);
        }
    }

    if (xStr === "") return 0;

    const x = parseInt(xStr);
    return x * sum;

};