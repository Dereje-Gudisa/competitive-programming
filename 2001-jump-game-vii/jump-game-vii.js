/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
    const n = s.length;
    const reachable = new Array(n).fill(false);
    reachable[0] = true;

    const prefix = new Array(n).fill(0);
    prefix[0] = 1;

    for (let i = 1; i < n; i++) {
        if (s[i] === '0') {
            const left = Math.max(0, i - maxJump);
            const right = i - minJump;

            if (right >= 0) {
                let sum = prefix[right];
                if (left > 0) sum -= prefix[left - 1];
                if (sum > 0) reachable[i] = true;
            }
        }

        prefix[i] = prefix[i - 1] + (reachable[i] ? 1 : 0);
    }

    return reachable[n - 1];
    
};