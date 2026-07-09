/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    const comp = new Array(n);
    comp[0] = 0;
    let compId = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] - nums[i - 1] <= maxDiff) {
            comp[i] = compId;
        } else {
            comp[i] = ++compId;
        }
    }

    const result = [];
    for (const [u, v] of queries) {
        result.push(comp[u] === comp[v]);
    }
    return result;
    
};