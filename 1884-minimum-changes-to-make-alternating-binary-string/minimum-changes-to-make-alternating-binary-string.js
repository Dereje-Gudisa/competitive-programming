/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let startWithZero = 0;
    let startWithOne = 0;

    for (let i = 0; i < s.length; i++) {
        let expectedZero = i % 2 === 0 ? '0' : '1';
        let expectedOne = i % 2 === 0 ? '1' : '0';

        if (s[i] !== expectedZero) startWithZero++;
        if (s[i] !== expectedOne) startWithOne++;
    }

    return Math.min(startWithZero, startWithOne);
};