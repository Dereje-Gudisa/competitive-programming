/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    let total = 0;

    for (let n = num1; n <= num2; n++) {
        const s = n.toString();
        if (s.length < 3) continue;

        let waviness = 0;
        for (let i = 1; i < s.length - 1; i++) {
            const a = +s[i - 1];
            const b = +s[i];
            const c = +s[i + 1];
            if (b > a && b > c) waviness++;
            if (b < a && b < c) waviness++;
        }
        total += waviness;
    }
    return total;
    
};