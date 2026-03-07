/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
    const n = s.length;
    const doubled = s + s;

    let pattern1 = '', pattern2 = '';
    for (let i = 0; i < 2 * n; i++) {
        pattern1 += i % 2 === 0 ? '0' : '1';
        pattern2 += i % 2 === 0 ? '1' : '0';
    }

    let flips1 = 0, flips2 = 0, res = Infinity;

    for (let i = 0; i < 2 * n; i++) {
        if (doubled[i] !== pattern1[i]) flips1++;
        if (doubled[i] !== pattern2[i]) flips2++;

        if (i >= n) { // slide window
            if (doubled[i - n] !== pattern1[i - n]) flips1--;
            if (doubled[i - n] !== pattern2[i - n]) flips2--;
        }

        if (i >= n - 1) {
            res = Math.min(res, flips1, flips2);
        }
    }

    return res;
};