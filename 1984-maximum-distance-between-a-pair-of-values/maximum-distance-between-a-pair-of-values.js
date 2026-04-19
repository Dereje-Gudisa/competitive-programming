/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
    let i = 0; // pointer for nums1
    let j = 0; // pointer for nums2
    let maxDist = 0;
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            // Valid pair found
            maxDist = Math.max(maxDist, j - i);
            j++; // Try to increase distance by moving j right
        } else {
            // nums1[i] > nums2[j], need to move i right to satisfy condition
            i++;
        }
    }
    
    return maxDist;
    
};