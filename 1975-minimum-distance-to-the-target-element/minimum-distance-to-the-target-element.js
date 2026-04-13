/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let minDistance = Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            const distance = Math.abs(i - start);
            minDistance = Math.min(minDistance, distance);
        }
    }
    
    return minDistance;
    
};