/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    const n = Math.max(...nums);
    
    // Length must be n + 1
    if (nums.length !== n + 1) return false;
    
    const freq = new Array(n + 1).fill(0);
    
    for (const num of nums) {
        if (num > n) return false; // optional safety
        freq[num]++;
    }
    
    for (let i = 1; i < n; i++) {
        if (freq[i] !== 1) return false;
    }
    
    return freq[n] === 2;
    
};