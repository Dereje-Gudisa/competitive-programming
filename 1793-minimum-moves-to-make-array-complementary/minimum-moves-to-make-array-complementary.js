/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var minMoves = function(nums, limit) {
    const n = nums.length;
    const delta = new Array(2 * limit + 2).fill(0);

    for (let i = 0; i < n / 2; i++) {
        const a = nums[i];
        const b = nums[n - 1 - i];
        const low = 1 + Math.min(a, b);
        const high = limit + Math.max(a, b);
        const mid = a + b;

        // All targets require at most 2 moves
        delta[2] += 2;
        delta[2 * limit + 1] -= 2;

        // Targets in [low, high] require 1 move (not 2)
        delta[low] -= 1;
        delta[high + 1] += 1;

        // Mid target requires 0 moves (not 1)
        delta[mid] -= 1;
        delta[mid + 1] += 1;
    }

    let minMoves = Infinity;
    let curr = 0;
    for (let target = 2; target <= 2 * limit; target++) {
        curr += delta[target];
        minMoves = Math.min(minMoves, curr);
    }
    return minMoves;
    
};